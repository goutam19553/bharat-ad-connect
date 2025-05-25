import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type GLTFResult = ReturnType<typeof useGLTF>;

function DroneModel() {
  const gltf = useGLTF("/flying_drone.glb") as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  // Animate floating and rotation
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = 0.2 + Math.sin(t * 2) * 0.1;
    ref.current.position.x = Math.sin(t) * 0.3;
    ref.current.rotation.y = Math.sin(t) * 0.5;
  });

  // Make materials transparent once on mount
  useEffect(() => {
    gltf.scene.traverse((child) => {
      // @ts-ignore
      if (child.material) {
        const mat = child.material as THREE.Material & {
          transparent?: boolean;
          opacity?: number;
          depthWrite?: boolean;
        };
        mat.transparent = true;
        mat.opacity = 0.7;
        mat.depthWrite = false;
      }
    });
  }, [gltf.scene]);

  return <primitive ref={ref} object={gltf.scene} scale={0.5} />;
}

export default function FlyingDrone() {
  return (
    <Canvas
      camera={{ position: [0, 1, 3], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      shadows
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} castShadow />
      <DroneModel />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
