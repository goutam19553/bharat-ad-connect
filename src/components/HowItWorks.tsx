// File: HowItWorks3D.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float, Stars } from '@react-three/drei';
import './howitworks.css'; // Make sure this file exists and is imported

const steps = [
  {
    title: 'Sign Up & Customize',
    icon: '⭐',
    text: 'Create your account and customize your ad profile with preferences and goals.',
  },
  {
    title: 'Upload Wall Info',
    icon: '📄',
    text: 'Upload your wall or hoarding images with dimensions, location, and features.',
  },
  {
    title: 'Preview Your Ad',
    icon: '🎛️',
    text: 'Use our smart editor to preview your ad using AR tools and mockups.',
  },
  {
    title: 'Collaborate & Launch',
    icon: '🌐',
    text: 'Coordinate with printing partners, installation teams, and tracking tools.',
  },
  {
    title: 'Your Ad is Live!',
    icon: '📺',
    text: 'Your ad is now live and viewable with real-time analytics and feedback.',
  },
];

type StepSphereProps = {
  icon: string;
  title: string;
  text: string;
  index: number;
};

const StepSphere: React.FC<StepSphereProps> = ({ icon, title, text, index }) => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <mesh position={[index * 3.5 - 7, index % 2 === 0 ? 1.8 : -1.8, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#9333ea" emissive="#a855f7" emissiveIntensity={0.4} />
      <Html center>
        <div className="howitworks-sphere-content">
          <div className="howitworks-icon">{icon}</div>
          <h3 className="howitworks-title">{title}</h3>
          <p className="howitworks-text">{text}</p>
        </div>
      </Html>
    </mesh>
  </Float>
);

const HowItWorks3D: React.FC = () => {
  return (
    <section className="howitworks3d-section">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <Stars radius={50} depth={30} count={2000} factor={4} fade />

        {steps.map((step, index) => (
          <StepSphere key={index} {...step} index={index} />
        ))}
      </Canvas>

      {/* SVG Curved Connectors */}
      <svg
        className="howitworks3d-svg"
        viewBox="0 0 1400 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        <path
          d="M 150 150 C 350 50, 450 250, 650 150"
          stroke="url(#grad)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 650 150 C 850 50, 950 250, 1150 150"
          stroke="url(#grad)"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </section>
  );
};

export default HowItWorks3D;
