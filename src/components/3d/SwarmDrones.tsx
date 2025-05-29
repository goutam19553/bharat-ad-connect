import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type DroneData = {
  position: THREE.Vector3;
  speed: number;
  radius: number;
  angle: number;
};

const DRONE_COUNT = 15;

export function SwarmDrones() {
  // Initialize swarm data once
  const drones = useRef<DroneData[]>(
    Array.from({ length: DRONE_COUNT }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        Math.random() * 4 + 1,
        (Math.random() - 0.5) * 10
      ),
      speed: 0.01 + Math.random() * 0.02,
      radius: 0.15 + Math.random() * 0.1,
      angle: Math.random() * Math.PI * 2,
    }))
  );

  // Animate drones each frame
  useFrame(() => {
    drones.current.forEach((drone) => {
      drone.angle += drone.speed;
      // Circular horizontal movement
      drone.position.x = Math.cos(drone.angle) * 5;
      drone.position.z = Math.sin(drone.angle) * 5;
    });
  });

  return (
    <>
      {drones.current.map((drone, i) => (
        <mesh key={i} position={drone.position}>
          <sphereGeometry args={[drone.radius, 16, 16]} />
          <meshStandardMaterial
            emissive="#0ff"
            emissiveIntensity={0.8}
            color="#00ffff"
            transparent
            opacity={0.7}
            metalness={0.5}
            roughness={0.1}
          />
        </mesh>
      ))}
    </>
  );
}
