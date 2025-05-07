import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import 'echarts-gl';
import Switch from 'react-switch';
import * as echarts from 'echarts';

const AIAnalytics = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [region, setRegion] = useState('All');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const registerIndiaMap = async () => {
      const indiaMap = await import('echarts-countries-js/dist/india.json');
      echarts.registerMap('india', indiaMap.default);
    };
    registerIndiaMap();
  }, []);

  const regions = {
    All: [
      { name: 'Delhi', value: [77.1025, 28.7041, 120] },
      { name: 'Mumbai', value: [72.8777, 19.076, 180] },
      { name: 'Bangalore', value: [77.5946, 12.9716, 160] },
      { name: 'Chennai', value: [80.2707, 13.0827, 90] }
    ],
    North: [
      { name: 'Delhi', value: [77.1025, 28.7041, 120] }
    ],
    South: [
      { name: 'Bangalore', value: [77.5946, 12.9716, 160] },
      { name: 'Chennai', value: [80.2707, 13.0827, 90] }
    ]
  };

  const heatmapOptions = {
    tooltip: {},
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '5%',
      textStyle: { color: darkMode ? '#fff' : '#000' }
    },
    xAxis: {
      type: 'category',
      data: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      axisLine: { lineStyle: { color: darkMode ? '#fff' : '#000' } }
    },
    yAxis: {
      type: 'category',
      data: ['Location A', 'Location B', 'Location C'],
      axisLine: { lineStyle: { color: darkMode ? '#fff' : '#000' } }
    },
    series: [{
      name: 'Traffic',
      type: 'heatmap',
      data: [
        [0, 0, 15], [1, 0, 30], [2, 0, 45], [3, 0, 20],
        [0, 1, 60], [1, 1, 70], [2, 1, 90], [3, 1, 75],
        [0, 2, 40], [1, 2, 50], [2, 2, 65], [3, 2, 55],
      ]
    }]
  };

  const geoOptions = {
    geo3D: {
      map: 'india',
      shading: 'lambert',
      light: { main: { intensity: 1.2 }, ambient: { intensity: 0.3 } },
      viewControl: { autoRotate: true },
      itemStyle: {
        areaColor: darkMode ? '#1e40af' : '#bae6fd',
        borderColor: '#fff'
      }
    },
    series: [{
      type: 'bar3D',
      coordinateSystem: 'geo3D',
      data: regions[region],
      shading: 'lambert',
      itemStyle: { color: '#facc15' }
    }]
  };

  const lineOptions = {
    title: { text: 'Ad Engagement Trend', left: 'center', textStyle: { color: darkMode ? '#fff' : '#000' } },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      axisLine: { lineStyle: { color: darkMode ? '#fff' : '#000' } }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: darkMode ? '#fff' : '#000' } }
    },
    series: [{
      data: [120, 200, 150, 80, 70],
      type: 'line',
      smooth: true,
      areaStyle: {},
      animationDuration: 1000
    }]
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-500 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">📊 AI Analytics</h1>
          <div className="flex items-center gap-4">
            <label>🌗 Dark Mode</label>
            <Switch onChange={toggleDarkMode} checked={darkMode} />
            <select
              className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded"
              value={region}
              onChange={e => setRegion(e.target.value)}
            >
              {Object.keys(regions).map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Line Chart */}
        <div className="mb-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-yellow-300">
          <h2 className="text-xl font-semibold mb-2">📈 Animated Engagement Chart</h2>
          <ReactECharts option={lineOptions} style={{ height: 300 }} />
        </div>

        {/* Heatmap */}
        <div className="mb-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-red-300">
          <h2 className="text-xl font-semibold mb-2">🚦 Live Traffic Heatmap</h2>
          <ReactECharts option={heatmapOptions} style={{ height: 400 }} />
        </div>

        {/* Geospatial 3D */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-blue-300">
          <h2 className="text-xl font-semibold mb-2">🌍 3D Ad Coverage in India</h2>
          <ReactECharts option={geoOptions} style={{ height: 600 }} />
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;
