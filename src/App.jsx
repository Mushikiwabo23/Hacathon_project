import { useState } from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { MapPin, ThumbsUp, ThumbsDown, MessageCircle, TrendingUp, AlertTriangle, DollarSign, BarChart2, Activity, PieChart as PieChartIcon, Calendar } from "lucide-react";
import './index.css'
// Sample data - in a real implementation, this would come from a backend API
const sentimentTrendData = [
  { date: "Jan", positive: 30, neutral: 40, negative: 30 },
  { date: "Feb", positive: 25, neutral: 45, negative: 30 },
  { date: "Mar", positive: 35, neutral: 35, negative: 30 },
  { date: "Apr", positive: 40, neutral: 30, negative: 30 },
  { date: "May", positive: 45, neutral: 35, negative: 20 }
];

const sentimentByAreaData = [
  { area: "Nyarugenge", positive: 35, neutral: 40, negative: 25 },
  { area: "Gasabo", positive: 45, neutral: 30, negative: 25 },
  { area: "Kicukiro", positive: 40, neutral: 35, negative: 25 },
  { area: "Bugesera", positive: 30, neutral: 40, negative: 30 },
  { area: "Nyanza", positive: 25, neutral: 45, negative: 30 }
];

const keyIssueData = [
  { name: "Cost increase for long distances", value: 35, fill: "#FF6B6B" },
  { name: "Fare calculation transparency", value: 25, fill: "#FFD166" },
  { name: "Payment system reliability", value: 20, fill: "#06D6A0" },
  { name: "Service quality concerns", value: 15, fill: "#118AB2" },
  { name: "Other", value: 5, fill: "#073B4C" }
];

const iotDevicesData = [
  { type: "GPS trackers", deployed: 120, optimal: 150 },
  { type: "Passenger counters", deployed: 80, optimal: 130 },
  { type: "NFC readers", deployed: 90, optimal: 110 },
  { type: "Environmental sensors", deployed: 40, optimal: 65 }
];

const sentimentMessages = [
  {
    id: 1,
    text: "The new system is unfair to those who travel long distances for work every day.",
    sentiment: "negative",
    platform: "Twitter",
    date: "May 12, 2025"
  },
  {
    id: 2,
    text: "I'm saving money now since my commute is short! This is much better than before.",
    sentiment: "positive",
    platform: "Facebook",
    date: "May 11, 2025"
  },
  {
    id: 3,
    text: "Hard to understand how they calculate the fares. Need more transparency.",
    sentiment: "negative",
    platform: "Local Forum",
    date: "May 10, 2025"
  },
  {
    id: 4,
    text: "The system seems reasonable but the payment technology keeps failing.",
    sentiment: "neutral",
    platform: "News Comment",
    date: "May 9, 2025"
  },
  {
    id: 5,
    text: "Distance-based is fair in principle. Hope they improve the tech issues.",
    sentiment: "neutral",
    platform: "Survey",
    date: "May 8, 2025"
  }
];

const aiRecommendations = [
  {
    id: 1,
    title: "Peak/Off-peak Differentiation",
    description: "Implement variable pricing based on time of day to distribute ridership and improve affordability during off-peak hours."
  },
  {
    id: 2,
    title: "Zone-Based Approach",
    description: "Consider simplified zone-based pricing to improve transparency while maintaining distance fairness."
  },
  {
    id: 3,
    title: "Fare Caps",
    description: "Introduce daily or weekly fare caps to address concerns about excessive costs for long-distance travelers."
  },
  {
    id: 4,
    title: "Communication Campaign",
    description: "Launch targeted information campaign explaining fare calculation to address transparency concerns."
  }
];

export default function RwandaTransportDashboard() {
  const [activeTab, setActiveTab] = useState("sentiment");
  
  const SentimentTab = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <Activity size={20} className="text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Sentiment Trend Over Time</h3>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={sentimentTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }} />
              <Legend />
              <Line type="monotone" dataKey="positive" name="Positive" stroke="#06D6A0" strokeWidth={3} dot={{ fill: "#06D6A0", r: 6 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="neutral" name="Neutral" stroke="#118AB2" strokeWidth={3} dot={{ fill: "#118AB2", r: 6 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="negative" name="Negative" stroke="#FF6B6B" strokeWidth={3} dot={{ fill: "#FF6B6B", r: 6 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <PieChartIcon size={20} className="text-indigo-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Key Issues Identified</h3>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={keyIssueData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${(percent * 100).toFixed(0)}%`}
              >
                {keyIssueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  borderRadius: "8px", 
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)", 
                  border: "none" 
                }} 
                formatter={(value, name, props) => [`${value}%`, props.payload.name]}
              />
              <Legend verticalAlign="bottom" layout="horizontal" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center mb-4">
          <BarChart2 size={20} className="text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Sentiment by Area</h3>
        </div>
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={sentimentByAreaData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="area" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip contentStyle={{ borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }} />
            <Legend />
            <Bar dataKey="positive" name="Positive" stackId="a" fill="#06D6A0" radius={[4, 4, 0, 0]} />
            <Bar dataKey="neutral" name="Neutral" stackId="a" fill="#118AB2" radius={[4, 4, 0, 0]} />
            <Bar dataKey="negative" name="Negative" stackId="a" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center mb-4">
          <MessageCircle size={20} className="text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Recent Public Comments</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sentimentMessages.map((message) => (
            <div 
              key={message.id} 
              className="bg-gray-50 rounded-xl p-4 border-l-4 shadow-sm transition-all hover:shadow-md" 
              style={{
                borderColor: message.sentiment === "positive" ? "#06D6A0" : 
                          message.sentiment === "negative" ? "#FF6B6B" : "#118AB2"
              }}
            >
              <p className="text-gray-700">{message.text}</p>
              <div className="flex items-center text-sm text-gray-500 mt-3">
                <div className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full mr-2">
                  {message.platform}
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{message.date}</span>
                </div>
                <div className="ml-auto">
                  {message.sentiment === "positive" && <ThumbsUp size={16} className="text-green-500" />}
                  {message.sentiment === "negative" && <ThumbsDown size={16} className="text-red-500" />}
                  {message.sentiment === "neutral" && <MessageCircle size={16} className="text-blue-500" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  const AIIOTTab = () => (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center mb-6">
          <TrendingUp size={20} className="text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">AI-Powered Fare Optimization Recommendations</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiRecommendations.map((rec) => (
            <div key={rec.id} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-5 border border-indigo-100 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-indigo-600 p-3 rounded-xl text-white mr-4 shadow-md">
                  {rec.id === 1 && <TrendingUp size={24} />}
                  {rec.id === 2 && <MapPin size={24} />}
                  {rec.id === 3 && <DollarSign size={24} />}
                  {rec.id === 4 && <AlertTriangle size={24} />}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-indigo-800">{rec.title}</h4>
                  <p className="text-gray-600 mt-2 leading-relaxed">{rec.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center mb-6">
          <BarChart2 size={20} className="text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">IoT Device Deployment Status</h3>
        </div>
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={iotDevicesData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" stroke="#64748b" />
            <YAxis dataKey="type" type="category" stroke="#64748b" width={150} />
            <Tooltip contentStyle={{ borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }} />
            <Legend />
            <Bar dataKey="deployed" name="Currently Deployed" fill="#4F46E5" radius={[0, 4, 4, 0]} />
            <Bar dataKey="optimal" name="Optimal Coverage" fill="#06D6A0" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 bg-indigo-50 p-4 rounded-xl">
          <h4 className="font-semibold text-indigo-900">IoT Implementation Strategy</h4>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <div className="flex items-center">
                <span className="bg-indigo-600 text-white font-medium px-3 py-1 rounded-full mr-3 text-xs">GPS Trackers</span>
              </div>
              <p className="mt-2 text-gray-700">Enable real-time location tracking for accurate distance calculation</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <div className="flex items-center">
                <span className="bg-indigo-600 text-white font-medium px-3 py-1 rounded-full mr-3 text-xs">Passenger Counters</span>
              </div>
              <p className="mt-2 text-gray-700">Monitor bus occupancy to implement dynamic pricing based on demand</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <div className="flex items-center">
                <span className="bg-indigo-600 text-white font-medium px-3 py-1 rounded-full mr-3 text-xs">NFC Readers</span>
              </div>
              <p className="mt-2 text-gray-700">Facilitate seamless fare payment and collect trip pattern data</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <div className="flex items-center">
                <span className="bg-indigo-600 text-white font-medium px-3 py-1 rounded-full mr-3 text-xs">Environmental Sensors</span>
              </div>
              <p className="mt-2 text-gray-700">Collect data on vehicle conditions and environmental impact</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center mb-6">
          <Activity size={20} className="text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">AI + IoT Integration Benefits</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-5 border border-purple-100 shadow-sm hover:shadow-md transition-all">
            <h4 className="font-semibold text-lg text-purple-900">Dynamic Fare Adjustment</h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              AI algorithms analyze real-time IoT data to adjust fares based on current demand, traffic conditions, and occupancy rates.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100 shadow-sm hover:shadow-md transition-all">
            <h4 className="font-semibold text-lg text-blue-900">Personalized Fare Recommendations</h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Machine learning models identify optimal routes and times for users based on their travel patterns and budget constraints.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100 shadow-sm hover:shadow-md transition-all">
            <h4 className="font-semibold text-lg text-green-900">Predictive Maintenance</h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              IoT sensors detect vehicle issues early, reducing breakdowns and service disruptions that affect customer satisfaction.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100 shadow-sm hover:shadow-md transition-all">
            <h4 className="font-semibold text-lg text-amber-900">Fraud Detection</h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              AI algorithms identify unusual payment patterns and validate legitimate distance calculations to prevent system abuse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white">
        <header className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mr-4">
              <img src="/api/placeholder/48/48" alt="Rwanda Transport Logo" className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Rwanda Transport Insights</h1>
              <p className="mt-1 text-blue-100">Public sentiment analysis and AI/IoT optimization for distance-based fare system</p>
            </div>
          </div>
          
          <div className="mt-6 mb-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 font-medium">Overall Sentiment</p>
                  <div className="flex items-center mt-3 space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-300">42%</div>
                      <div className="text-xs text-blue-100 mt-1">Positive</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-300">35%</div>
                      <div className="text-xs text-blue-100 mt-1">Neutral</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-300">23%</div>
                      <div className="text-xs text-blue-100 mt-1">Negative</div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-300 to-green-400 opacity-90"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <p className="text-blue-100 font-medium">Data Sources</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-2.5 py-1 rounded-full">Twitter: 1,240</span>
                <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-2.5 py-1 rounded-full">Facebook: 3,150</span>
                <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-2.5 py-1 rounded-full">News: 420</span>
                <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-2.5 py-1 rounded-full">Forums: 850</span>
                <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-2.5 py-1 rounded-full">Surveys: 1,500</span>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <p className="text-blue-100 font-medium">Alert Status</p>
              <div className="mt-3">
                <div className="flex items-center bg-yellow-400 bg-opacity-20 p-3 rounded-lg">
                  <AlertTriangle className="text-yellow-300 mr-3" size={24} />
                  <div>
                    <h3 className="font-medium text-white">Moderate Concern</h3>
                    <p className="text-xs text-blue-100">Long-distance commuter dissatisfaction requires attention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button 
                className={`px-6 py-4 text-sm font-medium transition-all ${activeTab === "sentiment" 
                  ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50" 
                  : "text-gray-500 hover:text-indigo-600 hover:bg-indigo-50"}`}
                onClick={() => setActiveTab("sentiment")}
              >
                <div className="flex items-center">
                  <Activity size={18} className="mr-2" />
                  Sentiment Analysis
                </div>
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium transition-all ${activeTab === "ai-iot" 
                  ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50" 
                  : "text-gray-500 hover:text-indigo-600 hover:bg-indigo-50"}`}
                onClick={() => setActiveTab("ai-iot")}
              >
                <div className="flex items-center">
                  <TrendingUp size={18} className="mr-2" />
                  AI & IoT Solutions
                </div>
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {activeTab === "sentiment" ? <SentimentTab /> : <AIIOTTab />}
          </div>
        </div>
      </main>
      
      <footer className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/api/placeholder/40/40" alt="Rwanda Transport Logo" className="w-10 h-10" />
            </div>
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">Rwanda Transport Sentiment Analysis Dashboard - © 2025</p>
              <p className="text-xs text-blue-200 mt-1">Helping shape the future of public transportation</p>
            </div>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-blue-200">1</span>
              </div>
              <div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-blue-200">2</span>
              </div>
              <div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-blue-200">3</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}