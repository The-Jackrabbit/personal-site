/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Html } from '@react-three/drei'

export const HoveringLinks: React.FC = () =>{
  return  (
    <Html center position={[-0.5,2.8,0]}>
      <div className="text-right text-5xl text-white w-72 bg-transparent p-8">
        <a className="mb-16 normal-case block" href="https://www.linkedin.com/in/luke-masters-525944120/">linkedin</a>
				<a className="mb-16 normal-case block" href="https://github.com/The-Jackrabbit">github</a>
				<a className="mb-16 normal-case block" href="mailto:lukemastersva@gmail.com">contact</a>
      </div>
    </Html>
  );
  
}