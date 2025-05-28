// src/components/AnimatedBackground.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Explicitly import THREE
import WAVES from "vanta/dist/vanta.waves.min"; // Import the specific Vanta effect

export default function AnimatedBackground() {
  // useRef to hold the DOM element where Vanta will render
  const vantaRef = useRef<HTMLDivElement | null>(null);
  // useRef to hold the Vanta effect instance for cleanup
  const vantaEffect = useRef<any>(null); // Use 'any' for Vanta effect type if not strictly typed

  useEffect(() => {
    // Ensure the DOM element is available and Vanta effect hasn't been initialized yet
    if (vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current, // Pass the current DOM element
        THREE: THREE, // Explicitly pass the THREE object
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        // Colors adjusted for a subtle dark theme aesthetic
        color: 0x006699, // A darker, muted blue for the waves
        backgroundColor: 0x0a0a0a, // Very dark gray, almost black, for the base
        mixColors: true, // Blend wave and background colors for depth
        waveHeight: 20.0,
        waveSpeed: 1.0,
        shininess: 50.0,
        zoom: 0.75,
      });

      // Optional: Log to console to confirm initialization in development
      console.log("Vanta WAVES effect initialized!");
    }

    // Cleanup function: Destroy the Vanta effect when the component unmounts
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        console.log("Vanta WAVES effect destroyed!"); // Log for cleanup confirmation
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div
      ref={vantaRef} // Attach the ref to this div
      style={{
        position: "fixed", // Fixed position to cover the entire viewport
        top: 0,
        left: 0,
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        zIndex: -10, // Ensure it's behind all other content
        pointerEvents: "none", // Allows clicks/interactions on elements above it
      }}
    />
  );
}
