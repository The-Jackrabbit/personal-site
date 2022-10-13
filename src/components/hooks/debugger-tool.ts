import { useState } from "react";

export function useDebugger(defults: [number, number, number]) {
  const controls = []
  const [xPos, setXPos] = useState(defults[0]);
  controls.push({
    value: xPos,
    name: 'xPos',
    setValue: setXPos,
    step: 0.1,
    min: -5,
    max: 5,
  });
  const [yPos, setyPos] = useState(defults[1]);
  controls.push({
    value: yPos,
    name: 'yPos',
    setValue: setyPos,
    step: 0.1,
    min: -5,
    max: 5,
  });
  const [zPos, setzPos] = useState(defults[2]);
  controls.push({
    value: zPos,
    name: 'zPos',
    setValue: setzPos,
    step: 0.1,
    min: -10,
    max: 10,
  });

  return {
    controls,
    xPos, yPos, zPos
  }
}