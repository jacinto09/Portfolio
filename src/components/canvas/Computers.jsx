import { Suspense, useEffect, useState } from 'react'
import Loader from '../Loader'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Computers = ({ isMobile }) => {
  const lowpoly = useGLTF('./lowpoly/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} />
      <primitive object={lowpoly.scene} scale={isMobile ? 0.35 : 0.5} position={[0, -3, 1]} rotation={[-0.01, -0.2, -0, 1]} />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => { mediaQuery.removeEventListener('change', handleMediaQueryChange) }
  }, [])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas
