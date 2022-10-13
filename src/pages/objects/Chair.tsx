import { useGLTF } from '@react-three/drei'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {

}

const Chair: React.FC<Props> = () => {
  const { nodes } = useGLTF('./assets/chair/scene.gltf');

  if (nodes === null) {
    return null;
  }

  return (
    <primitive
      object={nodes.Sketchfab_Scene}
      scale={.8}
      rotation={[-4, -1.5, -4]}
      position={[ 0,-1,0]}
    />
  )
}

export default Chair;