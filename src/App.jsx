import { useState } from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { MapPin, ThumbsUp, ThumbsDown, MessageCircle, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
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
  { name: "Cost increase for long distances", value: 35, fill: "#FF8042" },
  { name: "Fare calculation transparency", value: 25, fill: "#FFBB28" },
  { name: "Payment system reliability", value: 20, fill: "#00C49F" },
  { name: "Service quality concerns", value: 15, fill: "#0088FE" },
  { name: "Other", value: 5, fill: "#8884d8" }
];

const iotDevicesData = [
  { type: "GPS trackers", deployed: 120, optimal: 150 },
  { type: "Passenger counters", deployed: 80, optimal: 130 },
  { type: "NFC readers", deployed: 90, optimal: 110 },
  { type: "Environmental sensors", deployed: 40, optimal: 65 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Sentiment Trend Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sentimentTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="positive" stroke="#00C49F" strokeWidth={2} />
              <Line type="monotone" dataKey="neutral" stroke="#FFBB28" strokeWidth={2} />
              <Line type="monotone" dataKey="negative" stroke="#FF8042" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Key Issues Identified</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={keyIssueData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {keyIssueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-2">Sentiment by Area</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sentimentByAreaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="area" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="positive" stackId="a" fill="#00C49F" />
            <Bar dataKey="neutral" stackId="a" fill="#FFBB28" />
            <Bar dataKey="negative" stackId="a" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Recent Public Comments</h3>
        <div className="space-y-4">
          {sentimentMessages.map((message) => (
            <div key={message.id} className="border-l-4 pl-4 py-2" style={{
              borderColor: message.sentiment === "positive" ? "#00C49F" : 
                          message.sentiment === "negative" ? "#FF8042" : "#FFBB28"
            }}>
              <p className="text-gray-700">{message.text}</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span className="mr-3">{message.platform}</span>
                <span>{message.date}</span>
                {message.sentiment === "positive" && <ThumbsUp size={16} className="ml-3 text-green-500" />}
                {message.sentiment === "negative" && <ThumbsDown size={16} className="ml-3 text-orange-500" />}
                {message.sentiment === "neutral" && <MessageCircle size={16} className="ml-3 text-yellow-500" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  const AIIOTTab = () => (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">AI-Powered Fare Optimization Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiRecommendations.map((rec) => (
            <div key={rec.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  {rec.id === 1 && <TrendingUp size={20} className="text-blue-600" />}
                  {rec.id === 2 && <MapPin size={20} className="text-blue-600" />}
                  {rec.id === 3 && <DollarSign size={20} className="text-blue-600" />}
                  {rec.id === 4 && <AlertTriangle size={20} className="text-blue-600" />}
                </div>
                <div>
                  <h4 className="font-medium text-blue-600">{rec.title}</h4>
                  <p className="text-gray-600 mt-1">{rec.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">IoT Device Deployment Status</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={iotDevicesData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="type" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="deployed" name="Currently Deployed" fill="#8884d8" />
            <Bar dataKey="optimal" name="Optimal Coverage" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4">
          <h4 className="font-medium">IoT Implementation Strategy</h4>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 font-medium px-2 py-1 rounded mr-2 text-xs">GPS Trackers</span>
              <span>Enable real-time location tracking for accurate distance calculation</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 font-medium px-2 py-1 rounded mr-2 text-xs">Passenger Counters</span>
              <span>Monitor bus occupancy to implement dynamic pricing based on demand</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 font-medium px-2 py-1 rounded mr-2 text-xs">NFC Readers</span>
              <span>Facilitate seamless fare payment and collect trip pattern data</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 font-medium px-2 py-1 rounded mr-2 text-xs">Environmental Sensors</span>
              <span>Collect data on vehicle conditions and environmental impact</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">AI + IoT Integration Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-indigo-600">Dynamic Fare Adjustment</h4>
            <p className="mt-2 text-gray-600">
              AI algorithms analyze real-time IoT data to adjust fares based on current demand, traffic conditions, and occupancy rates.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-indigo-600">Personalized Fare Recommendations</h4>
            <p className="mt-2 text-gray-600">
              Machine learning models identify optimal routes and times for users based on their travel patterns and budget constraints.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-indigo-600">Predictive Maintenance</h4>
            <p className="mt-2 text-gray-600">
              IoT sensors detect vehicle issues early, reducing breakdowns and service disruptions that affect customer satisfaction.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-indigo-600">Fraud Detection</h4>
            <p className="mt-2 text-gray-600">
              AI algorithms identify unusual payment patterns and validate legitimate distance calculations to prevent system abuse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Rwanda Transport Fare Sentiment Analysis</h1>
          <p className="mt-1">Public sentiment analysis and AI/IoT optimization for distance-based fare system</p>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <h2 className="text-lg font-medium text-gray-700">Overall Sentiment</h2>
            <div className="flex items-center justify-around mt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">42%</div>
                <div className="text-sm text-gray-500 mt-1">Positive</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">35%</div>
                <div className="text-sm text-gray-500 mt-1">Neutral</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">23%</div>
                <div className="text-sm text-gray-500 mt-1">Negative</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <h2 className="text-lg font-medium text-gray-700">Data Sources</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">Twitter: 1,240 posts</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">Facebook: 3,150 comments</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">News Sites: 420 comments</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">Forums: 850 discussions</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">Surveys: 1,500 responses</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <h2 className="text-lg font-medium text-gray-700">Alert Status</h2>
            <div className="mt-4">
              <div className="flex items-center bg-yellow-50 p-3 rounded-lg">
                <AlertTriangle className="text-yellow-500 mr-2" size={24} />
                <div>
                  <h3 className="font-medium">Moderate Concern</h3>
                  <p className="text-sm text-gray-600">Long-distance commuter dissatisfaction requires attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b">
            <div className="flex">
              <button 
                className={`px-4 py-3 text-sm font-medium ${activeTab === "sentiment" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("sentiment")}
              >
                Sentiment Analysis
              </button>
              <button 
                className={`px-4 py-3 text-sm font-medium ${activeTab === "ai-iot" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("ai-iot")}
              >
                AI & IoT Solutions
              </button>
            </div>
          </div>
          
          <div className="p-4">
            {activeTab === "sentiment" ? <SentimentTab /> : <AIIOTTab />}
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        <p>Rwanda Transport Sentiment Analysis Dashboard - © 2025</p>
      </footer>
    </div>
  );
}