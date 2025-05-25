'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage } from '@react-three/drei'
import { useCursor } from '@react-three/drei'
import { useState } from 'react'

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

export default function BillboardModel() {
  const handleClick = () => {
    alert('You clicked the billboard! 🚀')
    // Or navigate to a booking page
    // router.push('/book-wall-space')
  }

 return (
  <div className="w-full h-[800px] bg-gray-800">
    <Canvas camera={{ position: [0, 3, 6], fov: 40 }}>
      <ambientLight intensity={1} />
      <Stage environment="city" intensity={0.6]}>
        <Billboard onClick={handleClick} />
      </Stage>
      <OrbitControls 
        enablePan={false} 
        enableZoom 
        enableRotate={false} 
        target={[0, 1.5, 0]} // focus on middle of the billboard
      />
    </Canvas>
  </div>
)
