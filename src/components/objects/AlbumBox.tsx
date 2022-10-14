import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three';

interface Props {
  path: string;
}

export const AlbumBox: React.FC<Props> = ({
  path,
}) => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    path,
  ])
  return (
    <mesh scale={2.5} visible position={[0.5, 1, 0]} rotation={[0, 0, 0]} castShadow>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        displacementScale={0}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  )
}
