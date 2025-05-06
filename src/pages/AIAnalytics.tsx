
import { useState } from 'react';
import { useTheme } from "@/hooks/useTheme";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartPie, BrainCircuit, LightbulbIcon, Zap } from "lucide-react";
import { motion } from "framer-motion";

// Mock data for demographics
const demographicData = [
  { age: '18-24', male: 28, female: 32, other: 5, engagement: 75 },
  { age: '25-34', male: 42, female: 45, other: 8, engagement: 85 },
  { age: '35-44', male: 35, female: 38, other: 6, engagement: 65 },
  { age: '45-54', male: 25, female: 28, other: 4, engagement: 55 },
  { age: '55-64', male: 18, female: 20, other: 3, engagement: 40 },
  { age: '65+', male: 12, female: 15, other: 2, engagement: 30 },
];

// Enhanced prediction data
const predictionData = [
  { month: 'Jan', actual: 65, predicted: 62, potential: 80 },
  { month: 'Feb', actual: 59, predicted: 60, potential: 75 },
  { month: 'Mar', actual: 80, predicted: 78, potential: 90 },
  { month: 'Apr', actual: 81, predicted: 80, potential: 95 },
  { month: 'May', actual: 56, predicted: 58, potential: 70 },
  { month: 'Jun', actual: 55, predicted: 55, potential: 68 },
  { month: 'Jul', actual: 60, predicted: 62, potential: 75 },
  { month: 'Aug', actual: 70, predicted: 68, potential: 85 },
  { month: 'Sep', actual: 65, predicted: 65, potential: 78 },
];

// Mock data for AI insights
const aiInsights = [
  { id: 1, insight: "25-34 age group shows highest engagement with outdoor ads", confidence: 92, action: "Increase targeting for this demographic in high-traffic areas", impact: "High" },
  { id: 2, insight: "Female viewers respond 15% better to blue color palettes", confidence: 87, action: "Adjust color schemes in campaigns targeting female audiences", impact: "Medium" },
  { id: 3, insight: "Morning commute (7-9AM) shows 22% higher recall rates", confidence: 91, action: "Prioritize morning slots for premium ad placements", impact: "High" },
  { id: 4, insight: "Tech professionals engage 3x more with interactive displays", confidence: 85, action: "Deploy more QR codes and AR features in business districts", impact: "High" },
  { id: 5, insight: "Local landmarks as backgrounds increase engagement by 18%", confidence: 88, action: "Incorporate city-specific imagery in regional campaigns", impact: "Medium" },
];

// Performance metrics data
const performanceData = [
  { name: 'ROI', value: 75 },
  { name: 'Engagement', value: 85 },
  { name: 'Recall', value: 65 },
  { name: 'Conversion', value: 55 },
];

// Colors for pie chart
const COLORS = ['#6C63FF', '#FF6B35', '#4CAF50', '#FFC107'];

// Chart configuration
const chartConfig = {
  male: {
    label: "Male",
    theme: {
      dark: "#6C63FF",
      light: "#6C63FF"
    }
  },
  female: {
    label: "Female",
    theme: {
      dark: "#FF6B35",
      light: "#FF6B35"
    }
  },
  other: {
    label: "Other",
    theme: {
      dark: "#4CAF50",
      light: "#4CAF50"
    }
  },
  engagement: {
    label: "Engagement",
    theme: {
      dark: "#FFD700",
      light: "#FFD700"
    }
  },
  actual: {
    label: "Actual",
    theme: {
      dark: "#6C63FF",
      light: "#6C63FF"
    }
  },
  predicted: {
    label: "Predicted",
    theme: {
      dark: "#FF6B35",
      light: "#FF6B35"
    }
  },
  potential: {
    label: "Potential",
    theme: {
      dark: "#4CAF50",
      light: "#4CAF50"
    }
  }
};

// Analysis types
type AnalysisType = 'demographics' | 'insights' | 'prediction';


 

const AIAnalytics = () => {
  const [activeAnalysis, setActiveAnalysis] = useState<AnalysisType>('demographics');
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
 
  };

  return (
    <section className={`py-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-ad-purple/20 via-ad-blue/20 to-ad-orange/20 rounded-xl mb-4">
            <BrainCircuit className={`w-6 h-6 ${isDarkMode ? 'text-ad-purple' : 'text-ad-blue'} mr-2`} />
            <span className="text-sm font-medium">Advanced AI Analysis</span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4`}>
            <span className={`${isDarkMode ? 'text-white' : 'text-ad-blue'}`}>
              AI-Powered Analytics & Insights
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ad-purple via-ad-blue to-ad-orange ml-2">2.0</span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Our neural networks analyze thousands of data points to deliver actionable insights 
            and predictive analytics for maximum advertising impact.
          </p>
        </motion.div>

        <motion.div 
          className="mb-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ToggleGroup type="single" value={activeAnalysis} onValueChange={(value) => value && setActiveAnalysis(value as AnalysisType)}>
            <ToggleGroupItem value="demographics" className={`${isDarkMode ? 'text-white data-[state=on]:bg-gray-700' : ''} flex items-center`}>
              <ChartPie className="w-4 h-4 mr-2" />
              Audience Demographics
            </ToggleGroupItem>
            <ToggleGroupItem value="insights" className={`${isDarkMode ? 'text-white data-[state=on]:bg-gray-700' : ''} flex items-center`}>
              <LightbulbIcon className="w-4 h-4 mr-2" />
              AI Insights
            </ToggleGroupItem>
            <ToggleGroupItem value="prediction" className={`${isDarkMode ? 'text-white data-[state=on]:bg-gray-700' : ''} flex items-center`}>
              <Zap className="w-4 h-4 mr-2" />
              Performance Prediction
            </ToggleGroupItem>
          </ToggleGroup>
        </motion.div>

        <motion.div 
          className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'} transition-colors duration-300`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          {activeAnalysis === 'demographics' && (
            <div className="p-6 lg:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <div className="mb-4 flex justify-between items-center">
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-ad-blue'}`}>
                      Audience Demographics Analysis
                    </h3>
                    <Badge variant="outline" className={`${isDarkMode ? 'border-ad-purple text-ad-purple' : 'border-ad-blue text-ad-blue'}`}>
                      Real-time Data
                    </Badge>
                  </div>
                  
                  <div className="h-96 bg-gradient-to-br from-transparent via-transparent to-ad-purple/5 rounded-xl p-4">
                    <ChartContainer config={chartConfig}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={demographicData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#444" : "#eee"} />
                          <XAxis 
                            dataKey="age" 
                            fontSize={12} 
                            tick={{ fill: isDarkMode ? "#ccc" : "#333" }} 
                          />
                          <YAxis 
                            fontSize={12} 
                            tick={{ fill: isDarkMode ? "#ccc" : "#333" }} 
                          />
                          <ChartTooltip 
                            content={<ChartTooltipContent />} 
                            cursor={{fill: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}}
                          />
                          <Legend />
                          <Bar dataKey="male" name="Male" fill="var(--color-male)" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="female" name="Female" fill="var(--color-female)" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="other" name="Other" fill="var(--color-other)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
                
                <div className="md:w-1/3">
                  <Card className={`h-full ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50'}`}>
                    <CardHeader>
                      <CardTitle className={`text-lg ${isDarkMode ? 'text-white' : 'text-ad-blue'}`}>Key Demographics Insights</CardTitle>
                      <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>AI-generated analysis</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex justify-center">
                        <div className="w-32 h-32">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={performanceData}
                                cx="50%"
                                cy="50%"
                                innerRadius={30}
                                outerRadius={50}
                                paddingAngle={2}
                                dataKey="value"
                                labelLine={false}
                              >
                                {performanceData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Top Audience Segment</h4>
                        <div className={`flex items-center p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
                          <div className="mr-3 p-2 rounded-full bg-ad-purple/10">
                            <ChartPie className="w-5 h-5 text-ad-purple" />
                          </div>
                          <div>
                            <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>25-34 age group</p>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>42% of total audience</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>AI Recommendation</h4>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                          Focus creative efforts on the 25-34 demographic with gender-inclusive messaging to maximize engagement across all segments.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-900/80 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="flex items-center mb-2">
                  <BrainCircuit className={`w-5 h-5 mr-2 ${isDarkMode ? 'text-ad-purple' : 'text-ad-blue'}`} />
                  <h4 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-ad-blue'}`}>
                    Neural Network Analysis
                  </h4>
                </div>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Our AI has detected strong engagement patterns in the 25-34 age group across all genders. Female viewers show slightly higher engagement 
                  across all demographics. The system recommends adjusting your creative strategy to better appeal to the 45+ segments where engagement 
                  metrics indicate untapped potential.
                </p>
              </div>
            </div>
          )}

          {activeAnalysis === 'insights' && (
            <div className="p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="mb-4 flex justify-between items-center">
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-ad-blue'} flex items-center`}>
                      <LightbulbIcon className="w-5 h-5 mr-2" />
                      AI-Generated Insights
                    </h3>
                    <Badge className="bg-ad-purple hover:bg-ad-purple/90 text-white">
                      <BrainCircuit className="w-3 h-3 mr-1" /> Powered by Neural Networks
                    </Badge>
                  </div>
                  
                  <Card className={`overflow-hidden ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} px-4 py-3`}>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse`}></div>
                        <span className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Live insights based on recent campaign data
                        </span>
                      </div>
                    </div>
                    <div className="max-h-[500px] overflow-auto scrollbar-thin">
                      <Table>
                        <TableHeader className="sticky top-0">
                          <TableRow className={isDarkMode ? 'border-gray-700 bg-gray-900' : 'bg-white'}>
                            <TableHead className="w-[80px]">#</TableHead>
                            <TableHead>Key Insight</TableHead>
                            <TableHead className="w-[120px]">Confidence</TableHead>
                            <TableHead className="w-[100px]">Impact</TableHead>
                            <TableHead className="text-right">Recommended Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {aiInsights.map((insight) => (
                            <TableRow key={insight.id} className={`${isDarkMode ? 'border-gray-700 hover:bg-gray-800/50' : 'hover:bg-gray-50'} transition-colors`}>
                              <TableCell className="font-medium">{insight.id}</TableCell>
                              <TableCell>
                                <div className="font-medium">{insight.insight}</div>
                              </TableCell>
                              <TableCell>
                                <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  insight.confidence > 90 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-blue-100 text-blue-800'
                                } ${isDarkMode ? 'opacity-90' : ''}`}>
                                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  {insight.confidence}%
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge className={
                                  insight.impact === 'High' 
                                    ? 'bg-red-100 text-red-800 hover:bg-red-100' 
                                    : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                                }>
                                  {insight.impact}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">{insight.action}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </Card>
                </div>
                
                <div className="lg:w-1/3">
                  <Card className={`h-full ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                    <CardHeader className="pb-2">
                      <CardTitle className={`text-lg ${isDarkMode ? 'text-white' : 'text-ad-blue'}`}>AI Analysis Process</CardTitle>
                      <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>How we generate insights</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-ad-purple/20 flex items-center justify-center mr-3">
                            <span className={`text-sm font-bold ${isDarkMode ? 'text-ad-purple' : 'text-ad-blue'}`}>1</span>
                          </div>
                          <h5 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Data Collection</h5>
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Our system collects audience interaction data across thousands of ad placements in real-time.
                        </p>
                      </div>
                      
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-ad-purple/20 flex items-center justify-center mr-3">
                            <span className={`text-sm font-bold ${isDarkMode ? 'text-ad-purple' : 'text-ad-blue'}`}>2</span>
                          </div>
                          <h5 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Neural Processing</h5>
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Our advanced neural networks analyze patterns that human analysts might miss.
                        </p>
                      </div>
                      
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-ad-purple/20 flex items-center justify-center mr-3">
                            <span className={`text-sm font-bold ${isDarkMode ? 'text-ad-purple' : 'text-ad-blue'}`}>3</span>
                          </div>
                          <h5 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Insight Generation</h5>
                        </div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          The system identifies high-confidence insights with clear actionable recommendations.
                        </p>
                      </div>
                      
                      <div className="text-center pt-4">
                        <div className={`inline-block px-3 py-1 rounded-full ${isDarkMode ? 'bg-ad-purple/20 text-ad-purple' : 'bg-ad-blue/10 text-ad-blue'} text-xs font-medium`}>
                          99.4% accuracy rate
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {activeAnalysis === 'prediction' && (
  <div className="p-6 lg:p-8 space-y-8">
    {/* Header */}
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-xl font-semibold flex items-center ${isDarkMode ? 'text-white' : 'text-ad-blue'}`}>
          <Zap className="w-5 h-5 mr-2" />
          AI Performance Prediction
        </h3>
        <Badge variant="outline" className={`${isDarkMode ? 'border-ad-purple text-ad-purple' : 'border-ad-blue text-ad-blue'}`}>
          Predictive Engine v2.5
        </Badge>
      </div>

      {/* Chart */}
      <div className="bg-gradient-to-br from-transparent via-transparent to-ad-purple/5 rounded-xl p-4 mb-6">
        <div className="h-72">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={predictionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#444" : "#eee"} />
                <XAxis dataKey="month" fontSize={12} tick={{ fill: isDarkMode ? "#ccc" : "#333" }} />
                <YAxis fontSize={12} tick={{ fill: isDarkMode ? "#ccc" : "#333" }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Area type="monotone" dataKey="actual" stackId="1" stroke="var(--color-actual)" fill="var(--color-actual)" fillOpacity={0.2} />
                <Area type="monotone" dataKey="predicted" stackId="2" stroke="var(--color-predicted)" fill="var(--color-predicted)" fillOpacity={0.2} />
                <Area type="monotone" dataKey="potential" stackId="3" stroke="var(--color-potential)" fill="var(--color-potential)" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </div>

    {/* Prediction Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* ROI Prediction */}
      <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border border-gray-200'} overflow-hidden`}>
        <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>ROI Prediction</p>
              <h4 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>+24%</h4>
            </div>
            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
              <svg className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} fill="none" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <p className={`mt-4 text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Estimated increase with optimized targeting
          </p>
        </CardContent>
      </Card>

      {/* Brand Recall */}
      <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border border-gray-200'} overflow-hidden`}>
        <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Brand Recall</p>
              <h4 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>+18%</h4>
            </div>
            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
              <svg className={`w-6 h-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-500'}`} fill="none" viewBox="0 0 24 24">
                <path d="..." stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          <p className={`mt-4 text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Projected improvement with AI-suggested creative
          </p>
        </CardContent>
      </Card>

      {/* Conversion Rate */}
      <Card className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border border-gray-200'} overflow-hidden`}>
        <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-600"></div>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Conversion Rate</p>
              <h4 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>+15%</h4>
            </div>
            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-orange-900/30' : 'bg-orange-50'}`}>
              <svg className={`w-6 h-6 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} fill="none" viewBox="0 0 24 24">
                <path d="..." stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '55%' }}></div>
            </div>
          </div>
          <p className={`mt-4 text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Expected improvement with optimal placement strategy
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Recommendation Box */}
    <Card className={`${isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
      <CardHeader className="pb-2">
        <CardTitle className={`text-lg flex items-center ${isDarkMode ? 'text-white' : 'text-ad-blue'}`}>
          <BrainCircuit className="w-5 h-5 mr-2" />
          AI Recommendation Engine
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-900/90' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center mb-3">
            <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-ad-purple' : 'bg-ad-blue'} mr-2`}></div>
            <h5 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Strategic Recommendation</h5>
          </div>
          <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Based on our predictive models, allocating 60% of your budget to digital displays in high-traffic business districts 
            during morning hours (7–9AM) will maximize ROI and brand recall. Focus creative content on local landmarks with blue 
            color schemes to enhance engagement with your key demographic segments.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
              94% Confidence
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
              AI-Generated
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
)}

};

export default AIAnalytics;
