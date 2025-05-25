'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage } from '@react-three/drei'
import { useCursor } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function DancingBillboard({ index, delay }: { index: number; delay: number }) {
  const { scene } = useGLTF('/low-poly_billboard_pack.glb')
  const meshRef = useRef<THREE.Object3D>(null)
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  const [startTime] = useState(() => Date.now() + delay * 1000)

  useFrame(({ clock }) => {
    const mesh = meshRef.current
    if (!mesh) return

    const t = clock.getElapsedTime()
    const active = Date.now() >= startTime

    if (active) {
      mesh.rotation.x = Math.sin(t * 2 + index) * 0.5
      mesh.rotation.y = Math.cos(t * 2 + index * 1.5) * 1.2
      mesh.rotation.z = Math.sin(t * 3 + index) * 0.8

      const scale = 1.5 + Math.sin(t * 2 + index) * 0.3
      mesh.scale.set(scale, scale, scale)

      mesh.position.y = Math.sin(t * 5 + index) * 0.5
      mesh.position.x = Math.cos(t * 3 + index) * 0.5
    }
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
      <Canvas camera={{ position: [8, 4, 10], fov: 50 }}>
        <ambientLight intensity={2} />
        <Stage environment="city" intensity={1}>
          <DancingBillboard index={0} delay={0} />
          <DancingBillboard index={1} delay={1} />
          <DancingBillboard index={2} delay={2} />
        </Stage>
        <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} autoRotate />
      </Canvas>
    </div>
  )
}
