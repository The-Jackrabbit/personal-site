import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import { object } from 'zod';
import { ToolTip2 } from '../debugging-objects/ToolTips';
import { useDebugger } from '../hooks/debugger-tool';
import { Model } from './Sketch';


interface FlatCoord {
  x: number;
  z: number;
  s: number;
}
/**
 * 1 (0, 0)
 * 1 (1, 1)
 * 1 (2, 2)
 * 2 (3, 3)
 * 2 (5, 5)
 * 2 (7, 7)
 * 3 (9, 9)
 * 3 (12, 12)
 * 3 (15, 1)
 * 
 * 
 * 3 3 3   3 3 
 */

const generateList = () => {
  const list: FlatCoord[] = [

  ];
  for (let i = -5 ; i < 5 ; i+=0.5) {
    for (let j = -5 ; j < 5 ; j+=0.5) {
      list.push({
        x: 4*i,
        z: 4*j,
        s: 4, // Math.abs(j) > 1 ? 2 : 1,
      })
    }
  }

  return list;
}

const Grass3D: React.FC = () => {
  const { nodes } = useGLTF('./assets/grass/sketch.gltf');

  const list = generateList();
  const  {
    xPos, yPos, zPos,
    controls
  } = useDebugger([0,1.9,0]);
  if (nodes === null) {
    return null;
  }

  return (
    <>
      <ToolTip2
        controls={controls}
      />
      {list.map((coord: FlatCoord) =>  (
        <Model
          key={JSON.stringify(coord)}
          scale={[coord.s, 3, coord.s]}
          position={[coord.x, -1 , coord.z]}
          rotation={[xPos, yPos, zPos]}
        />
      ))}         
    </>
  )
}

export default Grass3D;