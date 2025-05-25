'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage, useCursor } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function Billboard({ onClick }: { onClick: () => void }) {
  const { scene } = useGLTF('/low-poly_billboard_pack.glb')
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  return (
    <primitive
      object={scene}
      scale={1.5}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    />
  )
}

function AnimatedCamera() {
  const { camera } = useThree()
  const clockRef = useRef(0)

  useFrame((state, delta) => {
    clockRef.current += delta
    const t = clockRef.current

    // Rotation around Y-axis
    const radius = 5 + Math.sin(t * 0.5) * 1 // Zoom in and out effect
    const angle = (Math.PI * t * 0.2) % Math.PI // Rotate 180 degrees max
    camera.position.x = radius * Math.sin(angle)
    camera.position.z = radius * Math.cos(angle)
    camera.lookAt(0, 1, 0)
  })

  return null
}

export default function BillboardModel() {
  const handleClick = () => {
    alert('You clicked the billboard! 🚀')
  }

  return (
    <div className="w-full h-[500px] bg-black">
      <Canvas camera={{ position: [5, 2, 5], fov: 40 }}>
        <ambientLight intensity={1} />
        <Stage environment="city" intensity={0.6}>
          <Billboard onClick={handleClick} />
        </Stage>
        <AnimatedCamera />
        {/* Optional: Remove or disable manual controls */}
        {/* <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} /> */}
      </Canvas>
    </div>
  )
}
