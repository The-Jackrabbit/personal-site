import { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';

export const OrbitCamera = (props: any) => {
  const { setControls } = props;
  const ref = useRef<any>();

  useEffect(() => {
    if (!ref.current) return;
    setControls(ref.current);
  }, [setControls]);
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      zoom0={-1}
      makeDefault
      ref={ref}
      target={[-0.85, 1.75, -0.82]}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2 - 0.35}
      minAzimuthAngle={-0.35}
      maxAzimuthAngle={0.2}
    />
  );
};
