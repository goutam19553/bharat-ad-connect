import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

export default function AnimatedBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Only initialize Vanta if it hasn't been initialized yet and the ref is available
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        // Using a slightly darker, subtle blue for the waves to blend with dark mode
        // This color will be the primary color of the wave peaks
        color: 0x006699, // A darker, muted blue
        waveHeight: 20.0,
        waveSpeed: 1.0,
        shininess: 50.0,
        zoom: 0.75, // Slightly zoom out to see more of the waves
        // Set background to transparent to allow the dark mode's `bg-black` to show
        // Vanta.js will draw its waves over this transparent background
        backgroundColor: 0x000000, // This will be the base color. 0x000000 means black.
                                    // With `mixColors: true`, it will mix with the wave color.
        // Optional: Mix colors to create more depth with your chosen 'color'
        // This will blend the wave color with the background color
        mixColors: true,
        // You can also adjust the "secondary" wave color if mixColors is true
        // This creates a nice gradient effect for the waves
        // secondaryColor: 0x003366, // A deeper blue
      });
    }

    // Cleanup function: destroy the Vanta effect when the component unmounts
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed", // Use fixed to ensure it covers the entire viewport
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10, // Ensure it stays behind all other content
        pointerEvents: "none", // Critical: Allows clicks/interactions on content above it
      }}
    />
  );
}
