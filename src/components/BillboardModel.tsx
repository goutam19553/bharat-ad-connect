'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage } from '@react-three/drei'

function Billboard() {
  const { scene } = useGLTF('/low-poly_billboard_pack.glb')

  return (
    <primitive
      object={scene}
      scale={1.5}
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
        {/* Removed OrbitControls to disable interaction */}
      </Canvas>
    </div>
  )
}
