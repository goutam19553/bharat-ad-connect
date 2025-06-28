import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { motion } from "framer-motion";
import { AlertTriangle, MapPin, Eye, Zap, Layers, Database, ArrowRight } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const GovernmentSupportPage = () => {
  const potentialRevenueData = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Lost Revenue (₹ Cr)",
        data: [250, 300, 350, 400, 300, 350, 400, 450],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#fff',
          callback: function(value) {
            return '₹' + value + ' Cr';
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#fff'
        }
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen px-6 pt-32 pb-20">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Solving India's ₹10,000+ Crore
          </span><br />Outdoor Ad Tax Crisis
        </motion.h1>
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          The Ad Project is building India's first integrated platform to track, regulate, and monetize outdoor advertising at scale
        </motion.p>
      </div>

      {/* Crisis Highlight */}
      <div className="max-w-6xl mx-auto mb-24 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-8 md:p-12 text-white">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold">The ₹2000+ Crore BBMP Wake-up Call</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6 opacity-90">
                Bangalore's municipal corporation has lost over <span className="font-bold">₹2000 crores</span> in just 6-7 years due to:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "No centralized digital inventory of ads",
                  "Manual processes vulnerable to leakage",
                  "No real-time monitoring of installations",
                  "Massive unaccounted political/brand hoardings",
                  "Zero automated tax collection system"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-64">
              <Line data={potentialRevenueData} options={chartOptions} />
              <p className="mt-2 text-sm opacity-80 text-center">BBMP's lost revenue projection (2016-2023)</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Market Gap */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.h2 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Why This Problem <span className="text-blue-600">Remains Unsolved</span>
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "No Digital Infrastructure",
              desc: "Cities lack even basic digitized records of advertising assets",
              icon: <Database className="w-8 h-8 text-rose-500" />
            },
            {
              title: "Zero Monitoring",
              desc: "No geospatial tracking of installed ads in real-time",
              icon: <Eye className="w-8 h-8 text-amber-500" />
            },
            {
              title: "Manual Processes",
              desc: "Paper-based systems enable leakage and corruption",
              icon: <Layers className="w-8 h-8 text-blue-500" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 * i }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Solution */}
      <div className="max-w-6xl mx-auto mb-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
                <Zap className="w-5 h-5 mr-2" />
                <span>Our Tech-Powered Solution</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Ad Project Platform</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We're building India's first integrated system combining:
              </p>
              <ul className="space-y-4">
                {[
                  "📌 Geospatial mapping of all ad locations",
                  "🤖 AI-powered image recognition for ad monitoring",
                  "📱 AR verification tools for field inspectors",
                  "📊 Automated tax calculation and billing",
                  "🔍 Blockchain-based audit trails",
                  "📈 Real-time revenue dashboards"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 md:p-12 flex items-center justify-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Pilot Focus: Bangalore First</h3>
              </div>
              <p className="mb-6">
                We're prioritizing BBMP as our first implementation to:
              </p>
              <ul className="space-y-3">
                {[
                  "Recover lost ₹2000+ crore revenue",
                  "Create a model for other Indian cities",
                  "Work with municipal tech partners",
                  "Establish India's first digital ad inventory"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.h2 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Our <span className="text-blue-600">Technology Stack</span>
        </motion.h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Geospatial Mapping",
              desc: "GIS-powered digital twin of all ad locations with property boundaries",
              stats: "100% location accuracy"
            },
            {
              title: "AI Monitoring",
              desc: "Computer vision identifies unauthorized ads and verifies installations",
              stats: "90%+ detection accuracy"
            },
            {
              title: "AR Verification",
              desc: "Field inspectors use mobile AR to validate ads against permits",
              stats: "Real-time compliance"
            },
            {
              title: "Blockchain Records",
              desc: "Immutable audit trail of all transactions and changes",
              stats: "Tamper-proof history"
            },
            {
              title: "Smart Contracts",
              desc: "Auto-executing agreements for payments and renewals",
              stats: "Zero manual processes"
            },
            {
              title: "Data Analytics",
              desc: "Revenue optimization and policy impact simulations",
              stats: "Actionable insights"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 * i }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{item.desc}</p>
              <div className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium inline-block">
                {item.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Be Part of the Solution</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          We're seeking forward-thinking municipal partners and government advisors to pilot this transformation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
          >
            Government Partnerships
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="/demo"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Request Platform Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default GovernmentSupportPage;
