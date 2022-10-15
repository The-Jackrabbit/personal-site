/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Html } from '@react-three/drei'

export const HoveringLinks: React.FC = () =>{

  const [isOpen, setIsOpen] = useState(false);
  return  (
    <Html center position={[-0.5,2.8,0]}>
      <div className="text-right text-5xl text-white w-72 bg-transparent p-8">
        <a className="mb-16 normal-case block" href="https://www.linkedin.com/in/luke-masters-525944120/">linkedin</a>
				<a className="mb-16 normal-case block" href="https://github.com/The-Jackrabbit">github</a>
				<a className="normal-case block" href="mailto:lukemastersva@gmail.com">contact</a>
        <button className="text-xs " onClick={() => setIsOpen(!isOpen)}>credits</button>
        {isOpen && (
          <div onClick={() => setIsOpen(!isOpen)} className="text-xs bg-transparent p-8">
            <p>This work is based on {'"'}Folding Chair - Low Poly{'"'} (https://sketchfab.com/3d-models/folding-chair-low-poly-54bd0acd7c524d678128367a25a0f504) by Jeremy E. Grayson (https://sketchfab.com/JeremyGrayson) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</p>

            <p>This work is based on {'"'}Grass{'"'} (https://sketchfab.com/3d-models/grass-4b800e07ea3543e3870ad5e53b39d825) by MauroGonzalezA (https://sketchfab.com/MauroGonzalezA) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</p>
          </div>
        )}
      </div>
    </Html>
  );
  
}