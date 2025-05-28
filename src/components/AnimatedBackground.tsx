import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

export default function AnimatedBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE: THREE,           // Pass THREE explicitly here
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00bcd4,         // primary wave color (cyan)
        waveHeight: 20.0,
        waveSpeed: 1.0,
        shininess: 50.0,
        zoom: 1,
        backgroundColor: 0x0a0e23, // dark blue background (hex 0a0e23)
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 -z-10 w-full h-full" />;
}
