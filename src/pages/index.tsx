import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import SkyBox from '../components/environments-objects/SkyBox'
import { Scene } from './scenes/MainScene'
import { Perf } from "r3f-perf";
export default function App() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="black"></meta>
      </Head>
      <Canvas
        style={{ height: '100vh', width: '100vw'}}
        shadows
        dpr={[1, 2]}
        camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
      >
        <color attach="background" args={['#202020']} />
        <fog attach="fog" args={['#202020', 5, 20]} />
        <ambientLight intensity={1} />
        <Scene />
        {/* <SkyBox /> */}
        <Stars />
        <Perf />
      </Canvas>

      <div id="portal"></div>
    </>
  )
}
