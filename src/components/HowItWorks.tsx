import React from "react";
import {
  FaUserAlt,
  FaNewspaper,
  FaSlidersH,
  FaWallet,
  FaGlobe,
  FaPlayCircle,
} from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";

const steps = [
  {
    icon: <FaUserAlt />,
    title: "Sign Up & Explore",
    description:
      "Create an account, browse ad spaces on the interactive map, and find locations by city, footfall, and more.",
  },
  {
    icon: <FaNewspaper />,
    title: "Upload Ad & Details",
    description:
      "Submit your creative design, select target demographics, and input your campaign goals.",
  },
  {
    icon: <FaSlidersH />,
    title: "Preview & Customize",
    description:
      "Use our AI & AR tools to preview your ad on walls, hoardings, and digital kiosks in real environments.",
  },
  {
    icon: <FaWallet />,
    title: "Budget Campaign Suggestion",
    description:
      "Our platform provides smart package suggestions to match your budget and maximize ROI.",
  },
  {
    icon: <MdOutlineAutoGraph />,
    title: "Launch Across India",
    description:
      "Deploy your campaign across cities using our printing, installation & tracking network.",
  },
  {
    icon: <FaGlobe />,
    title: "Track & Grow",
    description:
      "Monitor reach, engagement & foot traffic analytics on your dashboard. Optimize for better ROI.",
  },
  {
    icon: <FaPlayCircle />,
    title: "Your Ad is Ready!",
    description:
      "Sit back and watch your campaign perform across India in real-time on your dashboard.",
  },
];

// Animations
const bounceAnimation = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
`;

const dashAnimation = `
  @keyframes dashMove {
    to {
      stroke-dashoffset: -20;
    }
  }
`;

export default function HowItWorks() {
  return (
    <section
      style={{
        backgroundColor: "#0F172A", // Updated to match your website background
        padding: "40px 20px",
        overflowX: "auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <style>{bounceAnimation}</style>
      <style>{dashAnimation}</style>

      <h2
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 28,
          fontWeight: "700",
          marginBottom: 40,
        }}
      >
        How It Works
      </h2>

      <div
        style={{
          display: "flex",
          gap: 40,
          position: "relative",
          width: steps.length * 210,
          minWidth: "100%",
          paddingBottom: 150,
        }}
      >
        {steps.map((step, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              style={{
                flex: "0 0 180px",
                position: "relative",
                top: isEven ? 0 : 100,
                textAlign: "center",
                color: "white",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  margin: "0 auto 16px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "bounce 2.5s ease-in-out infinite",
                  boxShadow:
                    "0 0 10px rgba(236,72,153,0.6), 0 0 15px rgba(139,92,246,0.6), 0 0 20px rgba(59,130,246,0.6)",
                }}
              >
                {React.cloneElement(step.icon, {
                  size: 32,
                  color: "#fff",
                })}
              </div>

              <h3
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  marginBottom: 8,
                  minHeight: 48,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#ccc",
                  lineHeight: 1.4,
                  minHeight: 72,
                }}
              >
                {step.description}
              </p>

              {/* Connecting lines */}
              {i < steps.length - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "absolute",
                    top: isEven ? 32 : 132,
                    left: 180,
                    width: 50,
                    height: 4,
                    zIndex: 5,
                  }}
                >
                  <defs>
                    <linearGradient id={`gradH${i}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="0"
                    y1="2"
                    x2="50"
                    y2="2"
                    stroke={`url(#gradH${i})`}
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    style={{ animation: "dashMove 2s linear infinite" }}
                  />
                </svg>
              )}

              {i < steps.length - 1 && !isEven && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "absolute",
                    top: 4,
                    left: 230,
                    width: 4,
                    height: 68,
                    zIndex: 5,
                  }}
                >
                  <defs>
                    <linearGradient id={`gradV${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="2"
                    y1="0"
                    x2="2"
                    y2="68"
                    stroke={`url(#gradV${i})`}
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    style={{ animation: "dashMove 2s linear infinite" }}
                  />
                </svg>
              )}

              {i < steps.length - 1 && isEven && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "absolute",
                    top: 68,
                    left: 230,
                    width: 4,
                    height: 36,
                    zIndex: 5,
                  }}
                >
                  <defs>
                    <linearGradient
                      id={`gradVDown${i}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="2"
                    y1="0"
                    x2="2"
                    y2="36"
                    stroke={`url(#gradVDown${i})`}
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    style={{ animation: "dashMove 2s linear infinite" }}
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
