import { useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TVSet } from '../components/objects/TVSet'
import Chair from '../components/objects/Chair'
import Grass3D from '../components/objects/Grass3D'
import { CubeTextureLoader } from 'three'
import Head from 'next/head'


export default function App() {
  return (
    <>
    <Head>
      <meta name="theme-color" content="black"></meta>
    </Head>
    <Canvas style={{ height: '100vh', width: '100vw'}}  shadows dpr={[1, 2]} camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}>
        <OrbitControls    />
      <color attach="background" args={['#202020']} />
      <fog attach="fog" args={['#202020', 5, 20]} />
      <ambientLight intensity={1} />
      <Scene />
      <SkyBox />
      {/* <Environment files="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/noon-grass/noon_grass_1k.hdr" background /> */}
    </Canvas>

    <div id="portal"></div>
    </>
  )
}

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "./assets/5.jpeg",
    "./assets/5.jpeg",
    "./assets/5.jpeg",
    "./assets/5.jpeg",
    "./assets/5.jpeg",
    "./assets/5.jpeg",
  ]);
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

function Scene() { 

  const chairRef = useRef<any>(null);
  return (
    <>

      <TVSet
        target={chairRef}
      />
  
      <Chair />

      <Grass3D />
  
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial color={"#003300"}/>
      </mesh>
    </>
  )
}
