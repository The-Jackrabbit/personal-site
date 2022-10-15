import { useRef,useState } from 'react';
import { TVSet } from '../../components/objects/AlbumBoxWithLight';
import Chair from '../../components/objects/Chair';
import Grass3D from '../../components/environments-objects/Grass3D';
import { OrbitCamera } from '../../components/cameras/OrbitCamera';

export function Scene() { 
  const chairRef = useRef<any>(null);
  const [, setOrbitRef] = useState<any>(null);

  return (
    <>
      <OrbitCamera setControls={setOrbitRef} />
    
      <TVSet target={chairRef} />
      <Chair />
      <Grass3D />
  
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial color={"#003300"}/>
      </mesh>
    </>
  )
}
