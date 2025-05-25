'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage } from '@react-three/drei'
import { useCursor } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function RotatingBillboard({ index, delay }: { index: number; delay: number }) {
  const { scene } = useGLTF('/low-poly_billboard_pack.glb')
  const meshRef = useRef<THREE.Object3D>(null)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  useFrame(({ clock }) => {
    const mesh = meshRef.current
    if (!mesh) return

    const t = clock.getElapsedTime()

    // Circle rotation path
    const radius = 3
    const angle = t * 0.5 + index * (Math.PI * 2 / 3)
    mesh.position.x = Math.cos(angle) * radius
    mesh.position.z = Math.sin(angle) * radius
    mesh.position.y = 0

    // Smooth zoom effect (scale up one by one)
    const timeSinceStart = t - delay
    const targetScale = timeSinceStart > 0 ? 1.5 : 0.5
    const currentScale = mesh.scale.x
    const lerpScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.05)
    mesh.scale.set(lerpScale, lerpScale, lerpScale)

    // Billboard facing center (look at origin)
    mesh.lookAt(0, 0, 0)
  })

  return (
    <primitive
      ref={meshRef}
      object={scene.clone()}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  )
}

export default function BillboardModel() {
  return (
    <div className="w-full h-[600px] bg-gray-800">
      <Canvas camera={{ position: [0, 4, 10], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <Stage environment="city" intensity={0.8}>
          <RotatingBillboard index={0} delay={0} />
          <RotatingBillboard index={1} delay={2} />
          <RotatingBillboard index={2} delay={4} />
        </Stage>
        <OrbitControls enablePan={false} enableZoom={false} enableRotate autoRotate />
      </Canvas>
    </div>
  )
}
