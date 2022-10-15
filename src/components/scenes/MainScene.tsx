import { useRef,useState } from 'react';
import { AlbumBoxWithLight } from '../objects/AlbumBoxWithLight';

import Grass3D from '../environments-objects/Grass3D';
import { OrbitCamera } from '../cameras/OrbitCamera';
import { HoveringLinks } from '../html/HoveringLinks';
import { Chair } from '../objects/Chair';

export function MainScene() { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chairRef = useRef<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export default MainScene;