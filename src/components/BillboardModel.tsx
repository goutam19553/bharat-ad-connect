'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Billboard() {
  const { scene } = useGLTF('/low-poly_billboard_pack.glb')
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = Math.sin(time) * 0.2 // oscillates between -0.2 and +0.2 radians
    }
  })

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={1.5}
      position={[0, 0.5, 0]} // slightly elevated
    />
  )
}

export default function BillboardModel() {
  return (
    <div className="w-full h-[800px] bg-gray-800">
      <Canvas camera={{ position: [0, 3, 6], fov: 40 }}>
        <ambientLight intensity={1} />
        <Stage environment="city" intensity={0.6}>
          <Billboard />
        </Stage>
      </Canvas>
    </div>
  )
}
