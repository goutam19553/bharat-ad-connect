import { useState } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FootTrafficDemo = () => {
  const [activeTab, setActiveTab] = useState("daily");

  const dailyData = [
    { time: '6 AM', traffic: 240 },
    { time: '8 AM', traffic: 1200 },
    { time: '10 AM', traffic: 750 },
    { time: '12 PM', traffic: 1800 },
    { time: '2 PM', traffic: 1400 },
    { time: '4 PM', traffic: 1600 },
    { time: '6 PM', traffic: 2400 },
    { time: '8 PM', traffic: 1800 },
    { time: '10 PM', traffic: 600 },
  ];

  const weeklyData = [
    { day: 'Monday', traffic: 4000, engagement: 2400 },
    { day: 'Tuesday', traffic: 3000, engagement: 1398 },
    { day: 'Wednesday', traffic: 2000, engagement: 9800 },
    { day: 'Thursday', traffic: 2780, engagement: 3908 },
    { day: 'Friday', traffic: 5890, engagement: 4800 },
    { day: 'Saturday', traffic: 6390, engagement: 3800 },
    { day: 'Sunday', traffic: 3490, engagement: 4300 },
  ];

  const demographicData = [
    { age: '18-24', percentage: 15 },
    { age: '25-34', percentage: 35 },
    { age: '35-44', percentage: 25 },
    { age: '45-54', percentage: 15 },
    { age: '55+', percentage: 10 },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-bharat-navy text-white p-6">
        <h3 className="text-2xl font-heading font-bold">Foot Traffic Analysis</h3>
        <p className="mt-2 text-gray-100">Make data-driven decisions with our advanced foot traffic analysis for any location.</p>
      </div>
      
      <div className="border-b dark:border-gray-700">
        <div className="flex">
          {["daily", "weekly", "demographic"].map(tab => (
            <button
              key={tab}
              className={`px-4 py-3 text-sm font-medium transition ${
                activeTab === tab
                  ? "border-b-2 border-bharat-saffron text-bharat-navy dark:text-bharat-saffron"
                  : "text-gray-500 dark:text-gray-400 hover:text-bharat-navy dark:hover:text-bharat-saffron"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "daily" && "Daily Traffic"}
              {tab === "weekly" && "Weekly Patterns"}
              {tab === "demographic" && "Demographics"}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <div className="h-80 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              {activeTab === "daily" && (
                <>
                  <h4 className="text-lg font-heading font-semibold mb-4 text-gray-900 dark:text-white">
                    Daily Foot Traffic - MG Road, Bengaluru
                  </h4>
                  <ResponsiveContainer width="100%" height="90%">
                    <LineChart data={dailyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                      <XAxis dataKey="time" stroke="currentColor" />
                      <YAxis stroke="currentColor" />
                      <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="traffic"
                        stroke="#FF9933"
                        activeDot={{ r: 8 }}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </>
              )}

              {activeTab === "weekly" && (
                <>
                  <h4 className="text-lg font-heading font-semibold mb-4 text-gray-900 dark:text-white">
                    Weekly Traffic & Engagement - MG Road, Bengaluru
                  </h4>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={weeklyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                      <XAxis dataKey="day" stroke="currentColor" />
                      <YAxis stroke="currentColor" />
                      <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                      <Legend />
                      <Bar dataKey="traffic" fill="#FF9933" />
                      <Bar dataKey="engagement" fill="#000080" />
                    </BarChart>
                  </ResponsiveContainer>
                </>
              )}

              {activeTab === "demographic" && (
                <>
                  <h4 className="text-lg font-heading font-semibold mb-4 text-gray-900 dark:text-white">
                    Demographic Breakdown - MG Road, Bengaluru
                  </h4>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                      data={demographicData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                      <XAxis type="number" stroke="currentColor" />
                      <YAxis dataKey="age" type="category" stroke="currentColor" />
                      <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                      <Legend />
                      <Bar dataKey="percentage" fill="#008080" />
                    </BarChart>
                  </ResponsiveContainer>
                </>
              )}
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 h-full">
              <h4 className="font-heading font-semibold text-bharat-navy dark:text-bharat-saffron mb-3">Location Insights</h4>
              
              <div className="space-y-4">
                {[
                  { label: "Peak Visibility", value: 92, color: "green-500" },
                  { label: "Engagement Potential", value: 78, color: "bharat-saffron" },
                  { label: "Target Audience Match", value: 85, color: "bharat-navy" },
                ].map(({ label, value, color }, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className={`bg-${color} h-2 rounded-full`} style={{ width: `${value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 border-t border-gray-300 dark:border-gray-700 pt-4">
                <h5 className="font-medium text-gray-800 dark:text-white mb-2">Key Takeaways</h5>
                <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                  {[
                    "Highest foot traffic occurs between 6-8 PM",
                    "Weekend traffic is 40% higher than weekdays",
                    "Primary audience is young professionals (25-34)",
                    "Optimal ad refresh rate: every 2 weeks",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-4 w-4 text-bharat-teal dark:text-bharat-saffron mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootTrafficDemo;
