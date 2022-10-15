import { useRef,useState } from 'react';
import { AlbumBoxWithLight } from '../../components/objects/AlbumBoxWithLight';

import Grass3D from '../../components/environments-objects/Grass3D';
import { OrbitCamera } from '../../components/cameras/OrbitCamera';
import { HoveringLinks } from '../../components/html/HoveringLinks';
import { Chair } from '../../components/objects/Chair';

export function Scene() { 
  const chairRef = useRef<any>(null);
  const [, setOrbitRef] = useState<any>(null);

  return (
    <>
      <OrbitCamera setControls={setOrbitRef} />
    
      <AlbumBoxWithLight target={chairRef} />
      <Chair />
      <Grass3D />

      <HoveringLinks />
  
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial color={"#003300"}/>
      </mesh>
    </>
  )
}
