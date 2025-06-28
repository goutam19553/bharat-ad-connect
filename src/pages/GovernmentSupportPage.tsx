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
import { ArrowRight, CheckCircle, BarChart2, MapPin, Shield, DollarSign, Layout, Users } from "lucide-react";

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
  const taxRecoveryData = {
    labels: ["2023", "2024", "2025"],
    datasets: [
      {
        label: "Recovered Tax (₹ Cr)",
        data: [85, 120, 200],
        borderColor: "#00cec9",
        backgroundColor: "rgba(0, 206, 201, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const barOptions = {
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
          color: '#fff'
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

  const featureIcons = {
    "Digital Transparency": <BarChart2 className="w-6 h-6" />,
    "Revenue Analytics": <DollarSign className="w-6 h-6" />,
    "Compliance Monitoring": <Shield className="w-6 h-6" />,
    "Real-time Tax Collection": <DollarSign className="w-6 h-6" />,
    "Government Dashboard": <Layout className="w-6 h-6" />,
    "White-label Solution": <Users className="w-6 h-6" />
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
            The Ad Project
          </span> – India's First B2G AdTech Platform
        </motion.h1>
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Revolutionizing urban governance through transparent, data-driven outdoor advertising management
        </motion.p>
      </div>

      {/* Why B2G Model */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.h2 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center"
        >
          The Digital Infrastructure <span className="text-blue-600">Cities Need</span>
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Revenue Recovery",
              value: "₹2000+ Cr",
              desc: "Potential tax recovery for Bangalore alone",
              icon: <DollarSign className="w-8 h-8 text-blue-500" />
            },
            {
              title: "Cities Impacted",
              value: "150+",
              desc: "Projected nationwide adoption",
              icon: <MapPin className="w-8 h-8 text-blue-500" />
            },
            {
              title: "Compliance Rate",
              value: "98%",
              desc: "Expected adherence with digital tracking",
              icon: <CheckCircle className="w-8 h-8 text-blue-500" />
            },
            {
              title: "Implementation",
              value: "6 Weeks",
              desc: "Average city onboarding timeline",
              icon: <ArrowRight className="w-8 h-8 text-blue-500" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 * i }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 mr-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</h3>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Problem Statement */}
      <div className="max-w-6xl mx-auto mb-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Urban Governance Challenge</h2>
          <p className="text-lg mb-6 opacity-90">
            Municipalities currently lack the digital infrastructure to effectively manage outdoor advertising, resulting in:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Massive tax revenue leakage (₹2000+ Cr in Bangalore alone)",
              "No centralized inventory of legal/illegal advertisements",
              "Manual processes prone to errors and corruption",
              "No real-time visibility into ad placements",
              "Difficulty enforcing compliance and regulations"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-white/10 p-4 rounded-lg border border-white/20">
            <p className="font-medium">Our Solution: A unified digital platform that brings transparency, automation, and real-time monitoring to urban ad governance.</p>
          </div>
        </motion.div>
      </div>

      {/* Platform Benefits */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.h2 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Platform Capabilities
          </span>
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Digital Transparency",
              desc: "End-to-end visibility of all outdoor advertising with blockchain-backed audit trails",
              icon: featureIcons["Digital Transparency"]
            },
            {
              title: "Revenue Analytics",
              desc: "AI-powered insights to optimize pricing and identify revenue opportunities",
              icon: featureIcons["Revenue Analytics"]
            },
            {
              title: "Compliance Monitoring",
              desc: "Computer vision detects unauthorized ads and alerts enforcement teams",
              icon: featureIcons["Compliance Monitoring"]
            },
            {
              title: "Real-time Tax Collection",
              desc: "Automated billing integrated with municipal payment systems",
              icon: featureIcons["Real-time Tax Collection"]
            },
            {
              title: "Government Dashboard",
              desc: "Centralized control panel with real-time reporting and analytics",
              icon: featureIcons["Government Dashboard"]
            },
            {
              title: "White-label Solution",
              desc: "Customizable platform matching each city's branding and requirements",
              icon: featureIcons["White-label Solution"]
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 * i }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-4 text-blue-600 dark:text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 mb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-gray-800 text-white rounded-2xl p-6 shadow-xl"
        >
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-blue-500/20 mr-4 text-blue-400">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold">Tax Recovery Projections</h2>
          </div>
          <div className="h-64">
            <Line data={taxRecoveryData} options={barOptions} />
          </div>
          <p className="mt-4 text-gray-300 text-sm">
            Projected tax recovery growth as cities adopt our platform (in ₹ Crores)
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 text-white rounded-2xl p-6 shadow-xl"
        >
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-lg bg-amber-500/20 mr-4 text-amber-400">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold">Platform Adoption Roadmap</h2>
          </div>
          <div className="h-64">
            <Bar
              data={{
                labels: ["Pilot Phase", "Expansion", "Nationwide"],
                datasets: [
                  {
                    label: "Cities Onboarded",
                    data: [5, 25, 150],
                    backgroundColor: "#00cec9",
                  },
                ],
              }}
              options={barOptions}
            />
          </div>
          <p className="mt-4 text-gray-300 text-sm">
            Projected city adoption over the next 3 years
          </p>
        </motion.div>
      </div>

      {/* Government Use Cases */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.h2 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Transformative <span className="text-blue-600">Use Cases</span>
        </motion.h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Revenue Optimization",
              desc: "Dynamic pricing models based on location analytics and demand forecasting",
              icon: <DollarSign className="w-5 h-5 text-blue-500" />
            },
            {
              title: "Illegal Ad Detection",
              desc: "AI identifies unauthorized ads and triggers enforcement workflows",
              icon: <Shield className="w-5 h-5 text-blue-500" />
            },
            {
              title: "Urban Planning",
              desc: "Ad density heatmaps inform infrastructure and zoning decisions",
              icon: <MapPin className="w-5 h-5 text-blue-500" />
            },
            {
              title: "Digital Tax Collection",
              desc: "Automated billing with integrated payment gateways reduces leakage",
              icon: <DollarSign className="w-5 h-5 text-blue-500" />
            },
            {
              title: "Permit Management",
              desc: "End-to-end digital permitting with automated compliance checks",
              icon: <CheckCircle className="w-5 h-5 text-blue-500" />
            },
            {
              title: "Public Transparency",
              desc: "Citizen portals showing authorized ads and revenue utilization",
              icon: <Users className="w-5 h-5 text-blue-500" />
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
              <div className="flex items-center mb-3">
                <div className="p-1.5 rounded-md bg-blue-50 dark:bg-blue-900/30 mr-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your City's Ad Governance?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Schedule a demo with our government solutions team to see the platform in action.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
        >
          Contact Government Team
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </motion.div>
    </div>
  );
};

export default GovernmentSupportPage;
