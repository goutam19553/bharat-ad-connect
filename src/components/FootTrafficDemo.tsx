
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-bharat-navy text-white p-6">
        <h3 className="text-2xl font-heading font-bold">Foot Traffic Analysis</h3>
        <p className="mt-2">Make data-driven decisions with our advanced foot traffic analysis for any location.</p>
      </div>
      
      <div className="border-b">
        <div className="flex">
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === "daily"
                ? "border-b-2 border-bharat-saffron text-bharat-navy"
                : "text-gray-500 hover:text-bharat-navy"
            }`}
            onClick={() => setActiveTab("daily")}
          >
            Daily Traffic
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === "weekly"
                ? "border-b-2 border-bharat-saffron text-bharat-navy"
                : "text-gray-500 hover:text-bharat-navy"
            }`}
            onClick={() => setActiveTab("weekly")}
          >
            Weekly Patterns
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === "demographic"
                ? "border-b-2 border-bharat-saffron text-bharat-navy"
                : "text-gray-500 hover:text-bharat-navy"
            }`}
            onClick={() => setActiveTab("demographic")}
          >
            Demographics
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <div className="h-80 bg-gray-50 rounded-lg p-4">
              {activeTab === "daily" && (
                <>
                  <h4 className="text-lg font-heading font-semibold mb-4">Daily Foot Traffic - MG Road, Bengaluru</h4>
                  <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                      data={dailyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
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
                  <h4 className="text-lg font-heading font-semibold mb-4">Weekly Traffic & Engagement - MG Road, Bengaluru</h4>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                      data={weeklyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="traffic" fill="#FF9933" />
                      <Bar dataKey="engagement" fill="#000080" />
                    </BarChart>
                  </ResponsiveContainer>
                </>
              )}

              {activeTab === "demographic" && (
                <>
                  <h4 className="text-lg font-heading font-semibold mb-4">Demographic Breakdown - MG Road, Bengaluru</h4>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                      data={demographicData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="age" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="percentage" fill="#008080" />
                    </BarChart>
                  </ResponsiveContainer>
                </>
              )}
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 rounded-lg p-4 h-full">
              <h4 className="font-heading font-semibold text-bharat-navy mb-3">Location Insights</h4>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Peak Visibility</span>
                    <span className="text-sm font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Engagement Potential</span>
                    <span className="text-sm font-semibold">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-bharat-saffron h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Target Audience Match</span>
                    <span className="text-sm font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-bharat-navy h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 border-t pt-4">
                <h5 className="font-medium mb-2">Key Takeaways</h5>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-bharat-teal mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Highest foot traffic occurs between 6-8 PM</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-bharat-teal mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Weekend traffic is 40% higher than weekdays</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-bharat-teal mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Primary audience is young professionals (25-34)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-4 w-4 text-bharat-teal mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Optimal ad refresh rate: every 2 weeks</span>
                  </li>
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
