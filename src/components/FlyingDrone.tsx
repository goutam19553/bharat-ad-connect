import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type GLTFResult = ReturnType<typeof useGLTF>;

function DroneModel() {
  const gltf = useGLTF("/flying_drone.glb") as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  // Orbit parameters
  const orbitRadiusX = 3; // wide ellipse radius X
  const orbitRadiusZ = 2; // ellipse radius Z
  const orbitHeight = 1; // flight height
  const orbitSpeed = 0.3; // slow speed

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();

    const angle = t * orbitSpeed;

    // Elliptical orbit around origin (0,0,0)
    ref.current.position.x = Math.cos(angle) * orbitRadiusX;
    ref.current.position.z = Math.sin(angle) * orbitRadiusZ;
    ref.current.position.y = orbitHeight + Math.sin(t * 3) * 0.2; // gentle up/down

    // Rotate drone to face the movement direction
    const dx = -Math.sin(angle) * orbitRadiusX;
    const dz = Math.cos(angle) * orbitRadiusZ;
    ref.current.rotation.y = Math.atan2(dz, dx) - Math.PI / 2;
  });

  // Make materials transparent (optional)
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
        mat.opacity = 0.7;
        mat.depthWrite = false;
      }
    });
  }, [gltf.scene]);

  return <primitive ref={ref} object={gltf.scene} scale={0.5} />;
}

export default function FlyingDrone() {
  return (
    <Canvas camera={{ position: [0, 3, 7], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <DroneModel />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
