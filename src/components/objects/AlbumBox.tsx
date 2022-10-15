import { RoundedBox } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three';

interface Props {
  path: string;
}

export const AlbumBox: React.FC<Props> = ({
  path,
}) => {
  const [colorMap, displacementMap, normalMap, aoMap] = useLoader(TextureLoader, [
    path,
  ]);
  return (
    <mesh scale={2.5} visible position={[0.5, 1, 0]} rotation={[0, Math.PI, 0]} castShadow>

      <RoundedBox args={[1, 1, 1]}  radius={0.05}>
        {/* <meshLambertMaterial attach="material" color={"grey"} /> */}
        <meshPhongMaterial
          attach="material" 
          // displacementScale={0.5}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          aoMap={aoMap}
        />
      </RoundedBox>
     
    </mesh>
  )
}
