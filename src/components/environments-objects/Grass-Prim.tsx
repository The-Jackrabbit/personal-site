/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    brush_Petal_g0_b0: THREE.Mesh
    brush_Petal_g0_b1: THREE.Mesh
    brush_Petal_g0_b2: THREE.Mesh
    brush_Petal_g0_b3: THREE.Mesh
  }
  materials: {
    brush_Petal: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./assets/grass/sketch.gltf') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.brush_Petal_g0_b0.geometry} material={materials.brush_Petal} />
      <mesh geometry={nodes.brush_Petal_g0_b1.geometry} material={materials.brush_Petal} />
      <mesh geometry={nodes.brush_Petal_g0_b2.geometry} material={materials.brush_Petal} />
      <mesh geometry={nodes.brush_Petal_g0_b3.geometry} material={materials.brush_Petal} />
    </group>
  )
}

useGLTF.preload('./assets/grass/sketch.gltf')
