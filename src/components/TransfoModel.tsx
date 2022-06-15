/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import TransfoGLTF from '../assets/model/TransfoModel.glb?url'
import { NavigateFunction } from 'react-router-dom'
import { Gebouw } from '../interfaces/Building'

type GLTFResult = GLTF & {
  nodes: {
    Location_5: THREE.Mesh
    Windturbine: THREE.Mesh
    Location_16: THREE.Mesh
    Location_11: THREE.Mesh
    Location_29: THREE.Mesh
    Location_39: THREE.Mesh
    Location_27: THREE.Mesh
    Groundfloor: THREE.Mesh
    Location_4: THREE.Mesh
    Location_38: THREE.Mesh
    Location_18: THREE.Mesh
    Location_1: THREE.Mesh
    Location_2: THREE.Mesh
    Location_35: THREE.Mesh
    Location_37: THREE.Mesh
    Location_13: THREE.Mesh
    Location_10: THREE.Mesh
    Location_9: THREE.Mesh
    Location_32: THREE.Mesh
    Location_30: THREE.Mesh
    Location_21: THREE.Mesh
    Location_15: THREE.Mesh
    Location_3: THREE.Mesh
    Location_36: THREE.Mesh
    Location_28: THREE.Mesh
    Location_8: THREE.Mesh
    Location_34: THREE.Mesh
    Location_40: THREE.Mesh
    Location_20: THREE.Mesh
    Location_17: THREE.Mesh
    Pylon_2: THREE.Mesh
    Pylon_1: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.032']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.035']: THREE.MeshStandardMaterial
    ['Material.021']: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    ['Material.023']: THREE.MeshStandardMaterial
    ['Material.018']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.030']: THREE.MeshStandardMaterial
    ['Material.020']: THREE.MeshStandardMaterial
    ['Material.025']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.022']: THREE.MeshStandardMaterial
    ['Material.024']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.017']: THREE.MeshStandardMaterial
    ['Material.029']: THREE.MeshStandardMaterial
    ['Material.031']: THREE.MeshStandardMaterial
    ['Material.036']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.026']: THREE.MeshStandardMaterial
    ['Material.034']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.012']: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.014']: THREE.MeshStandardMaterial
    ['Material.019']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
  }
}

export default function TransfoModel({
  data,
  navigator,
  ...props
}: {
  data: Gebouw[]
  navigator: NavigateFunction
}) {
  const { nodes, materials } = useGLTF(TransfoGLTF) as GLTFResult
  const [selected, setSelected] = useState<THREE.Mesh>()
  const groupRef = useRef<any>()

  // useEffect(() => {
  //   console.dir(groupRef)
  //   groupRef.current.children.forEach((obj: THREE.Object3D<THREE.Event>) => {
  //     console.log('obj', obj.uuid)

  //     if (obj.uuid.match(/Location_\d+/)) {
  //       console.log(`obj ${obj.uuid} matched`)

  //       // @ts-ignore
  //       obj.material.color.set(0x00ff00)
  //     }
  //   })
  // }, [groupRef])

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      onClick={(e) => {
        e.stopPropagation()
        if (selected)
          // @ts-ignore
          selected.parent.children.forEach((ch) => {
            // return every mesh back to its original color
            if (ch.uuid !== 'Groundfloor') {
              // @ts-ignore
              // ch.material.color.set(0x5a5a5a)
            }
          })
        if (e.object.uuid !== 'Groundfloor') {
          // console.log(e.object.material.color.getHexString());
          setSelected(e.object as THREE.Mesh)
          // set color of selected object to green
          // @ts-ignore
          // e.object.material.color.set(0x00ff00)

          // get airtable_id from object through it's location_id
          console.log(data)
          let airtable_id = data.find(
            (d) => `Location_${d.building_id}` === e.object.uuid,
          )?.id
          console.log('airtable_id', airtable_id)
          if (airtable_id) {
            navigator(`buildings/${airtable_id}/info`)
          }
        }
        // console.log(e.object.parent);
        // let id = e.object.parent.buildingID;
        // alert(`You clicked on building ${id}`);
      }}
    >
      <mesh
        uuid="Location_5"
        geometry={nodes.Location_5.geometry}
        material={materials['Material.002']}
        position={[265.7, 4.42, 119.24]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Windturbine"
        geometry={nodes.Windturbine.geometry}
        material={materials['Material.032']}
        position={[198.95, 40.85, 131.9]}
        rotation={[-Math.PI / 2, 0, 1.04]}
        scale={0.01}
      />
      <mesh
        uuid="Location_16"
        geometry={nodes.Location_16.geometry}
        material={materials['Material.006']}
        position={[76.57, 10.37, -68.9]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_11"
        geometry={nodes.Location_11.geometry}
        material={materials['Material.035']}
        position={[52.95, 5.84, -66.28]}
        rotation={[-Math.PI / 2, 0, 0.06]}
        scale={0.03}
      />
      <mesh
        uuid="Location_29"
        geometry={nodes.Location_29.geometry}
        material={materials['Material.021']}
        position={[90.66, 5.84, 64.48]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_39"
        geometry={nodes.Location_39.geometry}
        material={materials['Material.016']}
        position={[19.18, 5.84, -126.62]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_27"
        geometry={nodes.Location_27.geometry}
        material={materials['Material.023']}
        position={[-159.31, 5.84, 11.71]}
        rotation={[-Math.PI / 2, 0, 0.86]}
        scale={0.03}
      />
      <mesh
        uuid="Groundfloor"
        geometry={nodes.Groundfloor.geometry}
        material={materials['Material.018']}
        position={[123.99, 5.84, -22.04]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_4"
        geometry={nodes.Location_4.geometry}
        material={materials['Material.011']}
        position={[110.07, 5.84, -9.74]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_38"
        geometry={nodes.Location_38.geometry}
        material={materials['Material.030']}
        position={[17.24, 5.84, -165.83]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_18"
        geometry={nodes.Location_18.geometry}
        material={materials['Material.020']}
        position={[67.69, 5.84, -7.36]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_1"
        geometry={nodes.Location_1.geometry}
        material={materials['Material.025']}
        position={[123.99, 6.84, -22.03]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_2"
        geometry={nodes.Location_2.geometry}
        material={materials['Material.008']}
        position={[126.31, 5.84, -53.04]}
        rotation={[-Math.PI / 2, 0, 0.06]}
        scale={[0.02, 0.02, 0.03]}
      />
      <mesh
        uuid="Location_35"
        geometry={nodes.Location_35.geometry}
        material={materials['Material.013']}
        position={[33.82, 1.84, -15.24]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_37"
        geometry={nodes.Location_37.geometry}
        material={materials['Material.022']}
        position={[-170.72, 5.84, 31.8]}
        rotation={[-Math.PI / 2, 0, 1.43]}
        scale={0.03}
      />
      <mesh
        uuid="Location_13"
        geometry={nodes.Location_13.geometry}
        material={materials['Material.024']}
        position={[59.08, 5.84, -130.31]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={[0.03, 0.03, 0.08]}
      />
      <mesh
        uuid="Location_10"
        geometry={nodes.Location_10.geometry}
        material={materials['Material.010']}
        position={[82.5, 5.84, -33.07]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_9"
        geometry={nodes.Location_9.geometry}
        material={materials['Material.017']}
        position={[70.62, 5.84, -18.97]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_32"
        geometry={nodes.Location_32.geometry}
        material={materials['Material.029']}
        position={[-135.72, 5.84, -22.69]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_30"
        geometry={nodes.Location_30.geometry}
        material={materials['Material.031']}
        position={[140.84, 5.84, 86.76]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_21"
        geometry={nodes.Location_21.geometry}
        material={materials['Material.036']}
        position={[26.92, 5.84, 61.8]}
        rotation={[-Math.PI / 2, 0, 2.04]}
        scale={0.03}
      />
      <mesh
        uuid="Location_15"
        geometry={nodes.Location_15.geometry}
        material={materials['Material.001']}
        position={[1.32, 5.84, -39.22]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_3"
        geometry={nodes.Location_3.geometry}
        material={materials['Material.009']}
        position={[93.33, 5.84, -39.09]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_36"
        geometry={nodes.Location_36.geometry}
        material={materials['Material.026']}
        position={[26.56, 5.84, -84.45]}
        rotation={[-Math.PI / 2, 0, 0.7]}
        scale={0.03}
      />
      <mesh
        uuid="Location_28"
        geometry={nodes.Location_28.geometry}
        material={materials['Material.034']}
        position={[180.82, 5.84, -5.67]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_8"
        geometry={nodes.Location_8.geometry}
        material={materials['Material.007']}
        position={[83.09, 8.99, -124.57]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={[0.03, 0.03, 0.02]}
      />
      <mesh
        uuid="Location_34"
        geometry={nodes.Location_34.geometry}
        material={materials['Material.012']}
        position={[13.19, 5.84, -30.46]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_40"
        geometry={nodes.Location_40.geometry}
        material={materials['Material.015']}
        position={[48.4, 5.84, -140.56]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_20"
        geometry={nodes.Location_20.geometry}
        material={materials['Material.014']}
        position={[15.33, 5.84, -148.46]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Location_17"
        geometry={nodes.Location_17.geometry}
        material={materials['Material.019']}
        position={[60.18, 5.84, -43.44]}
        rotation={[-Math.PI / 2, 0, 2.08]}
        scale={0.03}
      />
      <mesh
        uuid="Pylon_2"
        geometry={nodes.Pylon_2.geometry}
        material={materials['Material.004']}
        position={[24.26, 6.06, 22.09]}
        rotation={[-Math.PI / 2, 0, 0.6]}
        scale={0.03}
      />
      <mesh
        uuid="Pylon_1"
        geometry={nodes.Pylon_1.geometry}
        material={materials['Material.005']}
        position={[192.28, 6.06, 12.52]}
        rotation={[-Math.PI / 2, 0, 1.69]}
        scale={0.03}
      />
    </group>
  )
}

useGLTF.preload(TransfoGLTF)
