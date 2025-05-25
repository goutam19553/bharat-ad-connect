import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type GLTFResult = ReturnType<typeof useGLTF>;

function DroneModel() {
  const gltf = useGLTF("/flying_drone.glb") as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  const flightDuration = 6; // seconds to fly from right to text
  const orbitRadius = 0.7; // radius of circle around text
  const orbitHeight = 0.7; // fixed height of orbit

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();

    if (t < flightDuration) {
      // Fly right to left (x: 3 to 0)
      const progress = t / flightDuration;
      ref.current.position.x = 3 - 3 * progress;
      ref.current.position.y = 1 + Math.sin(t * 5) * 0.2; // bobbing while flying
      ref.current.position.z = 0;
      ref.current.rotation.y = Math.sin(t * 2) * 0.3;
    } else {
      // Orbit around text at (0, 0, 0) in XZ plane
      const orbitTime = t - flightDuration;
      const angle = orbitTime * 1.5; // radians per second, adjust speed here

      ref.current.position.x = Math.cos(angle) * orbitRadius;
      ref.current.position.z = Math.sin(angle) * orbitRadius;
      ref.current.position.y = orbitHeight + Math.sin(t * 5) * 0.1; // gentle up/down bobbing

      // Make drone face forward along the tangent of the orbit
      ref.current.rotation.y = -angle + Math.PI / 2; 
    }
  });

  // Optional: Make materials transparent
  React.useEffect(() => {
    gltf.scene.traverse((child) => {
      // @ts-ignore
      if (child.material) {
        const mat = child.material as THREE.Material & {
          transparent?: boolean;
          opacity?: number;
          depthWrite?: boolean;
        };
        mat.transparent = true;
        mat.opacity = 0.7; // adjust transparency here
        mat.depthWrite = false;
      }
    });
  }, [gltf.scene]);

  return <primitive ref={ref} object={gltf.scene} scale={0.5} />;
}

export default function FlyingDrone() {
  return (
    <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <DroneModel />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
