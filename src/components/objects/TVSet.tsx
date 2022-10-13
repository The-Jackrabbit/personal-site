
import { useRef, useState  } from 'react'
import { useFrame } from '@react-three/fiber'
import { SpotLight, useGLTF } from '@react-three/drei'
import { Model } from './Tv';

interface Props {
  target: { current: any } | null;
}
const colors = [
  'hotpink',
  'darkgreen',
  'royalblue',
];

export const TVSet: React.FC<Props> = ({
  target,
}) => {
  const tvSetRef = useRef<any>()
  const [indexOfColorToRender, setindexOfColorToRender] = useState(0);
  const [dirToBob, setdirToBob] = useState('UP');
  useFrame((args) => {
    if (tvSetRef && tvSetRef.current && tvSetRef.current.rotation) {
      tvSetRef.current.rotation.y += 0.01;
      if (parseFloat(Number(tvSetRef.current.rotation.y).toPrecision(2))%1 === 0) {
        const newIndex = (indexOfColorToRender + 1)%colors.length;
        setindexOfColorToRender(newIndex)
      }

      if (tvSetRef.current.rotation.y >= 2*Math.PI) {
        tvSetRef.current.rotation.y=0;
      }

      const amountToAdd = dirToBob === 'UP' ? 0.002 : -0.002;
      const currentHeight = tvSetRef.current.position.y + amountToAdd;

      tvSetRef.current.position.y = currentHeight;
        
      if (currentHeight >= 1.8) {
        setdirToBob('DOWN');
      }
      
      if (currentHeight < 1.6) {
        setdirToBob('UP');
      }
    }
  });

  return (
      <mesh ref={tvSetRef} scale={0.5} position={[0, 1.8, 0]}>
        <mesh scale={0.5} position={[1, 0, 3]} rotation={[.3 ,0 ,  0]}>
          <Model />

          {target && (
            <SpotLight 
              castShadow 
              color={colors[indexOfColorToRender]}
              penumbra={0.8} // how much diffusion do you want on the color oof the light oce its on the target 
              distance={20 } // distance at which the light stops from its source (iehowlong is the light beam) 
              angle={0.45} // how much do you want the character lit up? (0 -> 0.45 are valid)
              attenuation={5} // ??
              anglePower={6} // how tight should the beam be?  
              intensity={20} // brigthness lul
              // target={target && target.current ? target?.current : null}
            />
          )}
        </mesh>
      </mesh>
  )
}
