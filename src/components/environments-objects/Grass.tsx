import React from 'react'
import { DoubleSide } from 'three';
import { Ground } from './Ground';

// This is the thing we are interested in
// The GreenSquare component renders a mesh.
// Meshes are objects that can have a shape and
// texture.
const Grass: React.FC = () => (
  <mesh
    rotation-x={90}
    rotation-y={0}
    rotation-z={0}
    position={[0, 0, 0]}
  >
    <planeBufferGeometry args={[2, 2]} />
    <meshStandardMaterial color={"#002200"} side={DoubleSide} />
    <Ground 
      mirror={1}
      blur={[500, 100]}
      mixBlur={12} 
      mixStrength={1.5} 
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      position-y={2}
    />
  </mesh>
);

export default Grass;