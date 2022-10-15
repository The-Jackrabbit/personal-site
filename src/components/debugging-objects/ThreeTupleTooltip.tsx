/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Html } from '@react-three/drei'
import { Portal } from '../../utils/Portal';


interface CoordReadout {
  label: string;
  value: number;
}
export interface Props {
  label: string;
  readouts: CoordReadout[];
}

export const ThreeTupleTooltip: React.FC<Props>= ({ label, readouts }) =>{
  return  (
    <Html center position={[-1, -1, 1]}>
      <Portal>
        <div className='fixed top-0 left-0 padding-2" bg-white z-50'>
          <h1>{label}</h1>
          {readouts.map((readout: CoordReadout, index: number): JSX.Element => (
            <div key={index}>
              <p>
                {readout.label ?? 'Value'}: {readout.value ?? 'empty'}
              </p>
            </div>
          ))}
        </div>
      </Portal>
    </Html>
  );
  
}