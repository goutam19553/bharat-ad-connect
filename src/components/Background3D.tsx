'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Points, PointMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import ForceGraph3D from '3d-force-graph';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  const particles = new Float32Array(5000).map(() => (Math.random() - 0.5) * 200);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const Nebula = () => {
  const texture = useTexture('/nebula.png'); // Add a faint transparent nebula image in public folder
  return (
    <mesh position={[0, 0, -100]}>
      <planeGeometry args={[300, 300]} />
      <meshBasicMaterial map={texture} transparent opacity={0.08} />
    </mesh>
  );
};

const ForceConstellation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const Graph = ForceGraph3D()(containerRef.current);
      Graph.graphData({
        nodes: Array.from({ length: 40 }, (_, i) => ({ id: i })),
        links: Array.from({ length: 80 }, () => ({
          source: Math.floor(Math.random() * 40),
          target: Math.floor(Math.random() * 40),
        })),
      });
      Graph.nodeColor(() => '#00ffff');
      Graph.linkColor(() => '#00ffff');
      Graph.nodeOpacity(0.6);
      Graph.linkOpacity(0.2);
      Graph.linkWidth(0.2);
      Graph.backgroundColor('transparent');
      Graph.showNavInfo(false);
      Graph.nodeRelSize(0.5);
    }
  }, []);

  return <div className="absolute inset-0 z-[-1]" ref={containerRef} />;
};

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none">
      {/* WebGL Canvas for stars + nebula + bloom */}
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <color attach="background" args={['#01010f']} />
        <ambientLight intensity={0.3} />
        <ParticleField />
        <Nebula />
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={1.5} />
        </EffectComposer>
      </Canvas>

      {/* DOM Layer ForceGraph (constellation lines) */}
      <ForceConstellation />
    </div>
  );
}
