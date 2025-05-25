/* howitworks.css */

/* Section container styling */
.how-it-works-container {
  background-color: #1f2937; /* Tailwind's gray-800 */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

/* Keyframes */
@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes growLine {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: var(--line-width, 50px);
    opacity: 1;
  }
}

@keyframes rotateOrbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Step wrapper animation */
.how-it-works-step {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  position: relative;
}

/* Dotted connector line */
.connector-horizontal {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 2px;
  width: 100%;
  max-width: 320px;
  background: none;
  border-top: 3px dotted #8b5cf6;
  animation: growLine 0.6s ease-out forwards;
  transform: translateX(-50%);
  opacity: 0;
  animation-fill-mode: forwards;
}

.connector-horizontal.delay-1 {
  animation-delay: 0.3s;
}
.connector-horizontal.delay-2 {
  animation-delay: 0.6s;
}
.connector-horizontal.delay-3 {
  animation-delay: 0.9s;
}

/* Numbered circle badge */
.step-number {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
  position: relative;
  z-index: 10;
  transition: box-shadow 0.3s ease;
}

.step-number:hover {
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.8);
}

/* === Custom Additions === */

/* Orbital spinning background elements (used optionally for floating icons/stars) */
.orbit-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  animation: rotateOrbit 60s linear infinite;
  pointer-events: none;
}

/* Nebula scroll glow blob */
.nebula-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent 70%);
  filter: blur(80px);
  opacity: 0.3;
  z-index: 0;
}

/* Glassmorphism effect for step cards */
.glass-card {
  backdrop-filter: blur(24px);
  background: rgba(255, 255, 255, 0.07);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.glass-card:hover {
  transform: scale(1.02);
}
