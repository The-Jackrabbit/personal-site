import { Reflector } from '@react-three/drei';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Props = any;

export const Ground: React.FC<Props> = (props) => (
  <Reflector
    mirror={0}
    resolution={1024}
    args={[8, 8]}
    {...props}
  />
);