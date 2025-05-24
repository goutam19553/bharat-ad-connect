// File: HowItWorks3D.tsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float, Stars } from '@react-three/drei';
import './howitworks.css'; // Custom animation and SVG styles

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
    <mesh position={[index * 4 - 8, index % 2 === 0 ? 2 : -2, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#9333ea" emissive="#a855f7" emissiveIntensity={0.4} />
      <Html center>
        <div className="text-white text-center w-48">
          <div className="text-4xl">{icon}</div>
          <h3 className="font-bold mt-2">{title}</h3>
          <p className="text-sm mt-1">{text}</p>
        </div>
      </Html>
    </mesh>
  </Float>
);

const HowItWorks3D: React.FC = () => {
  return (
    <div className="relative h-[200vh] bg-black">
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
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1400 400">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        <path id="connector1" d="M 100 100 C 250 30, 350 170, 500 100" stroke="url(#grad)" strokeWidth="3" fill="none" />
        <path id="connector2" d="M 500 100 C 650 30, 750 170, 900 100" stroke="url(#grad)" strokeWidth="3" fill="none" />
        <path id="connector3" d="M 900 100 C 1050 30, 1150 170, 1300 100" stroke="url(#grad)" strokeWidth="3" fill="none" />
      </svg>
    </div>
  );
};

export default HowItWorks3D;
