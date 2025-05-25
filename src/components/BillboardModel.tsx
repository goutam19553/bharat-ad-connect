'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stage, useCursor, useGLTF } from '@react-three/drei'
import { useRef, useState } from 'react'

interface BillboardProps {
  glbPath: string
  onClick: () => void
}

function Billboard({ glbPath, onClick }: BillboardProps) {
  const { scene } = useGLTF(glbPath)
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

function AnimatedCamera({ onCycleComplete }: { onCycleComplete: () => void }) {
  const { camera } = useThree()
  const clockRef = useRef(0)
  const [direction, setDirection] = useState(1) // 1 = zoom in, -1 = zoom out
  const [posZ, setPosZ] = useState(7)

  useFrame((_, delta) => {
    clockRef.current += delta

    let newPosZ = posZ - direction * delta * 1.5 // speed = 1.5 units per second

    // Zoom limits (closer and farther)
    if (newPosZ <= 3) {
      newPosZ = 3
      setDirection(-1)
      onCycleComplete()
    } else if (newPosZ >= 7) {
      newPosZ = 7
      setDirection(1)
    }

    setPosZ(newPosZ)

    // Update camera position: keep x,y fixed, move z
    camera.position.set(5, 2, newPosZ)
    camera.lookAt(0, 1, 0)
  })

  return null
}

export default function BillboardModel() {
  const billboardPaths = [
    '/low-poly_billboard_pack.glb',
    '/low-poly_billboard_pack2.glb',
    '/low-poly_billboard_pack3.glb',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleCycleComplete = () => {
    setCurrentIndex((prev) => (prev + 1) % billboardPaths.length)
  }

  const handleClick = () => {
    alert('You clicked the billboard! 🚀')
  }

  return (
    <div className="w-full h-[800px] bg-gray-800">
      <Canvas camera={{ position: [5, 2, 7], fov: 40 }}>
        <ambientLight intensity={1} />
        <Stage environment="city" intensity={0.6}>
          <Billboard glbPath={billboardPaths[currentIndex]} onClick={handleClick} />
        </Stage>
        <AnimatedCamera onCycleComplete={handleCycleComplete} />
      </Canvas>
    </div>
  )
}
