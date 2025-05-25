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
    <div className="w-full h-[800px] bg-gray-800"> {/* <- Changed background and height */}
      <Canvas camera={{ position: [5, 2, 5], fov: 40 }}>
        <ambientLight intensity={1} />
        <Stage environment="city" intensity={0.6}>
          <Billboard onClick={handleClick} />
        </Stage>
        <OrbitControls enablePan enableZoom enableRotate autoRotate />
      </Canvas>
    </div>
  )
}
