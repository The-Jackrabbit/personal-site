/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Html } from '@react-three/drei'
import { Portal } from '../../utils/Portal';

interface Control {
  value: number;
  name: string;
  setValue: (value: number) => void;
  step: number;
  min: number;
  max: number;
}

interface Props {
  controls: Control[];
}

export const ToolTip2: React.FC<Props>= (props) => (
  <Html center position={[-1, -1, 1]}>
    <Portal>
      <div className='w-screen bg-white z-50'>
        {props.controls.map((control: Control, index: number): JSX.Element => (
          <div key={index}>
            <p>{control.name}: {control.value}</p>
            <input
              className="w-screen"
              step={control.step.toString()}
              type="range"
              min={control.min}
              max={control.max}
              value={Number(control.value).toPrecision(2)}
              onChange={(e) => control.setValue(parseFloat(e.target.value))}
            /> 
          </div>
        ))}
      </div>
    </Portal>
  </Html>
);
