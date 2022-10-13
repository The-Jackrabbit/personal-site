
import { useRef  } from 'react'
import { useFrame } from '@react-three/fiber'
import { SpotLight, useGLTF } from '@react-three/drei'
import { Model } from './Tv';

interface Props {
  target: { current: any } | null;
}

export const TVSet: React.FC<Props> = ({
  target,
}) => {
  const tvSetRef = useRef<any>()
  useFrame(() => {
    if (tvSetRef && tvSetRef.current && tvSetRef.current.rotation) {
      tvSetRef.current.rotation.y += 0.01;
    }
  })


  return (
      <mesh ref={tvSetRef} scale={0.5} position={[0, 1.8, 0]}>
        <mesh scale={0.5} position={[1, 0, 3]} rotation={[.3 ,0 ,  0]}>
          <Model />

          {target && (
            <SpotLight 
              castShadow 
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
