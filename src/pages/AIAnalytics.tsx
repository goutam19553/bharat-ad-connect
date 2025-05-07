import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import Switch from 'react-switch';
import 'echarts/map/js/india';

const AIAnalytics = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [region, setRegion] = useState('All');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const regions = {
    All: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai'],
    North: ['Delhi'],
    South: ['Bangalore', 'Chennai']
  };

  const trafficTrendOptions = {
    title: { text: '📈 Weekly Traffic Trends', left: 'center', textStyle: { color: darkMode ? '#fff' : '#000' } },
    tooltip: { trigger: 'axis' },
    legend: { data: ['Views', 'Clicks'], textStyle: { color: darkMode ? '#fff' : '#000' } },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: { lineStyle: { color: darkMode ? '#fff' : '#000' } }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: darkMode ? '#fff' : '#000' } }
    },
    series: [
      { name: 'Views', type: 'line', smooth: true, data: [820, 932, 901, 934, 1290, 1330, 1400], areaStyle: {} },
      { name: 'Clicks', type: 'line', smooth: true, data: [120, 200, 150, 80, 70, 110, 130], areaStyle: {} }
    ]
  };

  const adCategoryPie = {
    title: { text: '📊 Ad Types Distribution', left: 'center', textStyle: { color: darkMode ? '#fff' : '#000' } },
    tooltip: { trigger: 'item' },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: { color: darkMode ? '#fff' : '#000' }
    },
    series: [
      {
        name: 'Ad Type',
        type: 'pie',
        radius: '60%',
        data: [
          { value: 1048, name: 'Billboards' },
          { value: 735, name: 'Wall Ads' },
          { value: 580, name: 'Transit Ads' },
          { value: 484, name: 'Malls & Airports' },
          { value: 300, name: 'Drone Displays' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        label: {
          formatter: '{b}: {d}%',
          color: darkMode ? '#fff' : '#000'
        },
        labelLine: {
          lineStyle: {
            color: darkMode ? '#fff' : '#000'
          }
        }
      }
    ]
  };

  const regionActivityMap = {
    title: {
      text: '🌐 Regional Ad Reach in India',
      left: 'center',
      textStyle: { color: darkMode ? '#fff' : '#000' }
    },
    tooltip: { trigger: 'item' },
    visualMap: {
      min: 0,
      max: 300,
      left: 'left',
      top: 'bottom',
      text: ['High', 'Low'],
      calculable: true,
      inRange: {
        color: ['#e0f3f8', '#1d4ed8']
      },
      textStyle: { color: darkMode ? '#fff' : '#000' }
    },
    series: [
      {
        name: 'Ad Reach',
        type: 'map',
        map: 'india',
        roam: true,
        label: {
          show: true,
          color: darkMode ? '#fff' : '#000'
        },
        data: [
          { name: 'Delhi', value: 220 },
          { name: 'Mumbai', value: 280 },
          { name: 'Bangalore', value: 240 },
          { name: 'Chennai', value: 160 }
        ]
      }
    ]
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-500 p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">🚀 AI Analytics Dashboard</h1>
          <div className="flex items-center gap-4">
            <label>🌙 Dark Mode</label>
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
        <div className="mb-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">📉 Weekly Ad Engagement</h2>
          <ReactECharts option={trafficTrendOptions} style={{ height: 400 }} />
        </div>

        {/* Pie Chart */}
        <div className="mb-12 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">📊 Distribution by Ad Type</h2>
          <ReactECharts option={adCategoryPie} style={{ height: 400 }} />
        </div>

        {/* India Regional Reach Map */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🌐 Ad Reach Across India</h2>
          <ReactECharts option={regionActivityMap} style={{ height: 600 }} />
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;
