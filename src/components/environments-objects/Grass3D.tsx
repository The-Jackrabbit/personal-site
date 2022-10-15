import { useGLTF } from '@react-three/drei'
import { Model } from './Grass-Prim';

interface FlatCoord {
  x: number;
  z: number;
  s: number;
}

const generateList = () => {
  const list: FlatCoord[] = [

  ];
  for (let i = -2 ; i < 2 ; i+=0.5) {
    for (let j = -3 ; j < 1 ; j+=0.5) {
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

  if (nodes === null) {
    return null;
  }

  return (
    <>
      {list.map((coord: FlatCoord) =>  (
        <Model
          key={JSON.stringify(coord)}
          scale={[coord.s, 3, coord.s]}
          position={[coord.x, -1 , coord.z]}
          rotation={[0,1.9,0]}
        />
      ))}         
    </>
  )
}

export default Grass3D;