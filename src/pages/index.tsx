import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { MainScene } from '../components/scenes/MainScene'

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
        <MainScene />
      </Canvas>
      <p>This work is based on {'"'}Folding Chair - Low Poly{'"'} (https://sketchfab.com/3d-models/folding-chair-low-poly-54bd0acd7c524d678128367a25a0f504) by Jeremy E. Grayson (https://sketchfab.com/JeremyGrayson) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</p>

      <p>This work is based on {'"'}Grass{'"'} (https://sketchfab.com/3d-models/grass-4b800e07ea3543e3870ad5e53b39d825) by MauroGonzalezA (https://sketchfab.com/MauroGonzalezA) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</p>
    </>
  )
}
