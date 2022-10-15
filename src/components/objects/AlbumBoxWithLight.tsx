
import { useRef, useState  } from 'react'
import { useFrame } from '@react-three/fiber'
import { SpotLight, useGLTF } from '@react-three/drei'
import { AlbumBox } from './AlbumBox';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target: { current: any } | null;
}
const colors = [
  'royalblue',
  'hotpink',
  'darkgreen',
  'red',
];

export const AlbumBoxWithLight: React.FC<Props> = ({
  target,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tvSetRef = useRef<any>()
  const [indexOfColorToRender, setindexOfColorToRender] = useState(1);
  const [dirToBob, setdirToBob] = useState('UP');
  const [iteration, setiteration] = useState(0);

  useFrame(() => {
    if (tvSetRef && tvSetRef.current && tvSetRef.current.rotation) {
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

    if (iteration % 200 === 0) {
      changeAlbum();
    }

    if (iteration > 1000000) {
      setiteration(0);
    }
    setiteration(iteration+1);
  });
  const changeAlbum = () => {
    setindexOfColorToRender((indexOfColorToRender+1)%colors.length);
  }
  return (
      <mesh ref={tvSetRef} scale={0.5} position={[0, 1.8, 0]} rotation={[0, 1.5*Math.PI,0]}>
        <mesh scale={0.5} position={[1, 0, 3]} rotation={[0.7, Math.PI,  0]}>
          
          <group onClick={changeAlbum}>
            {indexOfColorToRender === 0 && (
              <AlbumBox path={albums[0] as string} />            
            )}
            {indexOfColorToRender === 1 && (
              <AlbumBox path={albums[1] as string}  />            
            )}
            {indexOfColorToRender === 2 && (
              <AlbumBox path={albums[2] as string}  />            
            )}
              {indexOfColorToRender === 3 && (
              <AlbumBox path={albums[3] as string}  />            
            )}
          </group>

          {target && (
            <SpotLight 
              castShadow 
              color={colors[indexOfColorToRender]}
              penumbra={0.8} // how much diffusion do you want on the color oof the light oce its on the target 
              distance={20} // distance at which the light stops from its source (iehowlong is the light beam) 
              angle={2.2} // how much do you want the character lit up? (0 -> 0.45 are valid)
              attenuation={5} // ??
              anglePower={1} // how tight should the beam be?  
              intensity={5} // brigthness lul
              // target={target && target.current ? target?.current : null}
            />
          )}
        </mesh>
      </mesh>
  )
}

const albums = [
  './assets/ys.jpeg',
  './assets/Bjork_Post.png',
  './assets/The_Glow_Pt_2.png',
  './assets/if_youre_feeling_sinister.jpeg',
]
albums.forEach((album) => useGLTF.preload(album))