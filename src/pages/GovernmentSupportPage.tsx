import React, { useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, AlertTriangle, MapPin, Eye, Zap, Layers, Database, ArrowRight } from "lucide-react";

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
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
   <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen px-6 pt-32 pb-20">
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
          We're not just modernizing outdoor advertising — we're building a direct digital bridge between government bodies and the physical ad economy.
        </motion.p>
      </div>

      {/* Why B2G Model */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.h2 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Why a B2G Model is Essential
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              id: "b2g-1",
              content: "Governments lose hundreds of crores yearly due to unregistered hoardings, illegal flex banners, and lack of real-time data.",
              details: "Our research shows that over 40% of outdoor ads in major cities are unregistered, with BBMP alone losing ₹300+ crore annually from this leakage."
            },
            {
              id: "b2g-2",
              content: "There is no unified platform today that enables local bodies to digitally manage their ad inventories.",
              details: "Current systems rely on paper records and manual processes. Our platform provides the first end-to-end digital solution with geo-tagged ad tracking."
            },
            {
              id: "b2g-3",
              content: "The Ad Project is the first of its kind to offer tax automation, geo-tagged tracking, campaign monitoring, and public-facing ad transparency — all in one system.",
              details: "We combine AI-powered monitoring with blockchain-based records to create an immutable audit trail for all advertising transactions."
            },
            {
              id: "b2g-4",
              content: "We integrate directly with Smart City portals, municipal billing engines, and urban planning systems.",
              details: "Our API-first approach allows seamless integration with existing government systems, reducing implementation time and training costs."
            }
          ].map((item, i) => (
            <motion.div
              key={item.id}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 * i }}
              className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-[#FDCB6E] mb-2">✅ Key Insight</h3>
              <p>{item.content}</p>
              <button
                onClick={() => toggleSection(item.id)}
                className="mt-4 flex items-center text-sm text-[#FDCB6E] hover:underline"
              >
                {expandedSections[item.id] ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-1" />
                    Hide details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" />
                    Know more
                  </>
                )}
              </button>
              <AnimatePresence>
                {expandedSections[item.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-4 bg-[#1B3A4B]/80 rounded-lg border-l-4 border-[#FDCB6E]">
                      <p>{item.details}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Financial Impact */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h2 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-semibold text-gray-900 dark:text-white mb-4"
        >
          📉 ₹2,000+ Crores Lost in Bangalore Alone
        </motion.h2>
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-gray-700 dark:text-gray-300 mb-6"
        >
          Bangalore has suffered over ₹2,000 Cr in lost tax revenue due to outdoor ad mismanagement in the past decade.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => toggleSection('financial-impact')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {expandedSections['financial-impact'] ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Hide BBMP Revenue Analysis
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Show BBMP Revenue Analysis
              </>
            )}
          </button>
          <AnimatePresence>
            {expandedSections['financial-impact'] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 overflow-hidden"
              >
                <div className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg">
                  <div className="h-64">
                    <Line data={potentialRevenueData} options={chartOptions} />
                  </div>
                  <p className="mt-4 text-gray-300">
                    BBMP's lost revenue projection (2016-2023) based on our analysis of unaccounted outdoor advertising.
                    The actual figures could be higher considering unregistered political and event advertisements.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 mb-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-4">📈 Tax Recovery Over Time</h2>
          <div className="h-64">
            <Line data={taxRecoveryData} options={chartOptions} />
          </div>
          <button
            onClick={() => toggleSection('tax-recovery')}
            className="mt-4 flex items-center text-sm text-[#FDCB6E] hover:underline"
          >
            {expandedSections['tax-recovery'] ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Hide methodology
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Know how we calculate this
              </>
            )}
          </button>
          <AnimatePresence>
            {expandedSections['tax-recovery'] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-4 bg-[#1B3A4B]/80 rounded-lg border-l-4 border-[#FDCB6E]">
                  <p>
                    Projections based on implementing our platform in 5 pilot cities (2023), expanding to 25 tier-1/2 cities (2024),
                    and nationwide rollout to 150+ municipal corporations (2025). Assumes 60% recovery of currently lost revenue.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-[#FDCB6E] mb-4">💼 Platform Adoption by Cities</h2>
          <div className="h-64">
            <Bar
              data={{
                labels: ["Pilot Phase", "Expansion", "Nationwide"],
                datasets: [
                  {
                    label: "Cities Onboarded",
                    data: [5, 25, 150],
                    backgroundColor: "#FDCB6E",
                  },
                ],
              }}
              options={chartOptions}
            />
          </div>
          <button
            onClick={() => toggleSection('adoption')}
            className="mt-4 flex items-center text-sm text-[#FDCB6E] hover:underline"
          >
            {expandedSections['adoption'] ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Hide rollout plan
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                See our implementation roadmap
              </>
            )}
          </button>
          <AnimatePresence>
            {expandedSections['adoption'] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-4 bg-[#1B3A4B]/80 rounded-lg border-l-4 border-[#FDCB6E]">
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Pilot Phase (2023):</strong> Bangalore, Hyderabad, Pune, Ahmedabad, Jaipur</li>
                    <li><strong>Expansion (2024):</strong> Top 25 cities including Chennai, Kolkata, Surat</li>
                  <li><strong>Nationwide (2025):</strong> All 150+ municipal corporations with population &gt; 500k</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Platform Benefits */}
      <div className="max-w-6xl mx-auto mt-20 grid gap-10 md:grid-cols-2">
        {[
          {
            id: "benefit-1",
            title: "Real-time tracking of every hoarding",
            desc: "Part of our integrated B2G toolkit that ensures city-wide transparency and governance compliance.",
            details: "Using geospatial mapping and IoT sensors, we maintain a live inventory of all outdoor ads with exact locations, dimensions, and ownership details."
          },
          {
            id: "benefit-2",
            title: "Automated tax billing & receipts",
            desc: "Eliminates manual processes that lead to revenue leakage.",
            details: "Our system auto-calculates taxes based on location, size, and duration, with integrated payment gateways for instant collections."
          },
          {
            id: "benefit-3",
            title: "Transparent vendor registry",
            desc: "Centralized database of all authorized advertisers and agencies.",
            details: "Verified KYC process with rating system ensures only legitimate businesses can place ads, reducing fraud."
          },
          {
            id: "benefit-4",
            title: "Public dashboard for citizen complaints",
            desc: "Empowers residents to report illegal or offensive advertisements.",
            details: "AI-powered triage system routes complaints to appropriate departments with SLA tracking for resolution."
          },
          {
            id: "benefit-5",
            title: "Data-backed policy making",
            desc: "Provides actionable insights for urban planning committees.",
            details: "Heatmaps and analytics help optimize ad zoning policies and pricing strategies."
          },
          {
            id: "benefit-6",
            title: "Zero leakage in ad tax collection",
            desc: "Blockchain-based audit trail ensures complete accountability.",
            details: "Every transaction is immutably recorded, with smart contracts automating revenue sharing between stakeholders."
          }
        ].map((item, i) => (
          <motion.div
            key={item.id}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 * i }}
            className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold text-[#FDCB6E] mb-2">✅ {item.title}</h2>
            <p>{item.desc}</p>
            <button
              onClick={() => toggleSection(item.id)}
              className="mt-4 flex items-center text-sm text-[#FDCB6E] hover:underline"
            >
              {expandedSections[item.id] ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Hide technical details
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  How this works
                </>
              )}
            </button>
            <AnimatePresence>
              {expandedSections[item.id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 p-4 bg-[#1B3A4B]/80 rounded-lg border-l-4 border-[#FDCB6E]">
                    <p>{item.details}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Feature Boxes */}
      <div className="max-w-6xl mx-auto mt-24 grid gap-10 md:grid-cols-3">
        {[
          {
            id: "feature-1",
            title: "Digital Transparency",
            desc: "Track all outdoor advertising transactions in real-time with complete transparency and accountability.",
            details: "Blockchain-powered ledger provides immutable records of all ad placements, modifications, and payments."
          },
          {
            id: "feature-2",
            title: "Revenue Analytics",
            desc: "Comprehensive analytics on city-wide advertising revenue, trends, and optimization opportunities.",
            details: "Machine learning models identify under-monetized locations and recommend optimal pricing strategies."
          },
          {
            id: "feature-3",
            title: "Compliance Monitoring",
            desc: "Automated detection of unauthorized advertisements and compliance violations.",
            details: "Computer vision compares installed ads against permits, flagging discrepancies in real-time."
          },
          {
            id: "feature-4",
            title: "Real-time Tax Collection",
            desc: "Streamlined tax and fee collection with automated billing and payment processing.",
            details: "Integrated with UPI, net banking, and credit cards with automatic reconciliation to municipal accounts."
          },
          {
            id: "feature-5",
            title: "Government Dashboard",
            desc: "Comprehensive control panel for municipal authorities with permit management, compliance tracking and real-time reporting.",
            details: "Customizable views for different departments (tax, enforcement, urban planning) with role-based access."
          },
          {
            id: "feature-6",
            title: "White-label Solution",
            desc: "Custom-branded, multi-language supported platform tailored for municipalities with scalable infra.",
            details: "Deployed on secure government cloud or on-premise with full data sovereignty compliance."
          }
        ].map((item, i) => (
          <motion.div
            key={item.id}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.1 * i }}
            className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-[#FDCB6E] mb-2">{item.title}</h3>
            <p>{item.desc}</p>
            <button
              onClick={() => toggleSection(item.id)}
              className="mt-4 flex items-center text-sm text-[#FDCB6E] hover:underline"
            >
              {expandedSections[item.id] ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Hide implementation
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Technical implementation
                </>
              )}
            </button>
            <AnimatePresence>
              {expandedSections[item.id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 p-4 bg-[#1B3A4B]/80 rounded-lg border-l-4 border-[#FDCB6E]">
                    <p>{item.details}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Government Use Cases */}
      <div className="max-w-6xl mx-auto mt-24">
        <motion.h2 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Government Use Cases
        </motion.h2>
        <div className="grid gap-10 md:grid-cols-2">
          {[
            {
              id: "usecase-1",
              title: "Revenue Optimization",
              desc: "Identify high-value ad locations and optimize pricing strategies using real-time data.",
              details: "Dynamic pricing algorithms adjust rates based on foot traffic, visibility scores, and demand patterns."
            },
            {
              id: "usecase-2",
              title: "Illegal Advertisement Detection",
              desc: "AI-powered system flags unauthorized ads and alerts enforcement teams.",
              details: "Mobile app guides inspectors to violation locations with evidence collection tools for due process."
            },
            {
              id: "usecase-3",
              title: "Urban Planning",
              desc: "Use density heatmaps of ad placements to influence infrastructure decisions.",
              details: "Integration with GIS systems helps plan metro corridors, road widening, and pedestrian zones."
            },
            {
              id: "usecase-4",
              title: "Digital Tax Collection",
              desc: "Automated billing systems reduce manual intervention and boost tax compliance.",
              details: "Auto-generated notices and penalty calculations with online dispute resolution mechanisms."
            },
            {
              id: "usecase-5",
              title: "Permit Management",
              desc: "Digitized permits with workflow automation and compliance logs.",
              details: "End-to-end digital workflow from application to approval with automated document verification."
            },
            {
              id: "usecase-6",
              title: "Public-Private Partnerships",
              desc: "Enable trust-based collaboration with clear revenue-sharing models.",
              details: "Smart contracts automatically distribute payments between municipalities and private operators."
            }
          ].map((item, i) => (
            <motion.div
              key={item.id}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 * i }}
              className="bg-[#1B3A4B] text-white rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#FDCB6E] mb-2">{item.title}</h3>
              <p>{item.desc}</p>
              <button
                onClick={() => toggleSection(item.id)}
                className="mt-4 flex items-center text-sm text-[#FDCB6E] hover:underline"
              >
                {expandedSections[item.id] ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-1" />
                    Hide operational details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" />
                    See implementation scenario
                  </>
                )}
              </button>
              <AnimatePresence>
                {expandedSections[item.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-4 bg-[#1B3A4B]/80 rounded-lg border-l-4 border-[#FDCB6E]">
                      <p>{item.details}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-4xl mx-auto mt-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your City's Ad Governance?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Schedule a demo with our government solutions team to see the platform in action.
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
