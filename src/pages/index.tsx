import { Html, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Head from 'next/head'
import { Suspense } from 'react'
import { MainScene } from '../components/scenes/MainScene'

export function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
       <div className="w-80">
                <p className="text-white">{progress} % loaded</p>
                <div style={{ width: `${progress}%`}} className="bg-white h-2"></div>
              </div>
          </Html>
  )
}

export default function App() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="black"></meta>
      </Head>
    <div className="bg-black">
    <Canvas
        style={{ height: '100vh', width: '100vw'}}
        shadows
        dpr={[1, 2]}
        camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
      >
         <Suspense fallback={<Loader />}>
      <color attach="background" args={['#202020']} />
        <fog attach="fog" args={['#202020', 5, 20]} />
        <ambientLight intensity={1} />
        <MainScene />
      </Suspense>
      </Canvas>
    </div>
   
    </>
  )
}
