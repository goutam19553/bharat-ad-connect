'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Points, PointMaterial } from '@react-three/drei';
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

const NebulaVolume = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.01;
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x = t * 0.02 * (i + 1);
        child.rotation.y = t * 0.015 * (i + 1);
      });
    }
  });

  const layers = Array.from({ length: 5 }).map((_, i) => {
    const scale = 20 + i * 4;
    const opacity = 0.05 + i * 0.03;
    return (
      <mesh key={i}>
        <sphereGeometry args={[scale, 32, 32]} />
        <meshStandardMaterial
          color={new THREE.Color('#00ffff')}
          transparent
          opacity={opacity}
          roughness={1}
          metalness={0}
          emissive={'#00ffff'}
          emissiveIntensity={0.4 + i * 0.2}
          side={THREE.BackSide}
        />
      </mesh>
    );
  });

  return <group ref={groupRef}>{layers}</group>;
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
      {/* WebGL Canvas */}
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <color attach="background" args={['#01010f']} />
        <ambientLight intensity={0.5} />
        <ParticleField />
        <NebulaVolume />
        <EffectComposer>
          <Bloom intensity={2} luminanceThreshold={0} luminanceSmoothing={0.7} />
        </EffectComposer>
      </Canvas>

      {/* DOM-based constellation lines */}
      <ForceConstellation />
    </div>
  );
}
