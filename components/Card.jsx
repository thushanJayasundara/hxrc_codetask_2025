import React, {forwardRef, useRef, useImperativeHandle} from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { cardMap } from '../utils/cardList'
import {handlePointerEnter, handlePointerLeave} from "../src/animations/hovercard.js";

const Card = forwardRef(({
  code,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}, ref) => {
  const meshRef = useRef()
  useImperativeHandle(ref, () => meshRef.current, [])


  // const animateScale = useCallback((object, targetScale) => {
  //   let frameId
  //   const speed = 0.1
  //
  //   const step = () => {
  //     if (!object || !object.scale) return
  //
  //     object.scale.lerp(targetScale, speed)
  //
  //     if (
  //         Math.abs(object.scale.x - targetScale.x) < 0.01 &&
  //         Math.abs(object.scale.y - targetScale.y) < 0.01 &&
  //         Math.abs(object.scale.z - targetScale.z) < 0.01
  //     ) {
  //       object.scale.copy(targetScale)
  //       cancelAnimationFrame(frameId)
  //       return
  //     }
  //
  //     frameId = requestAnimationFrame(step)
  //   }
  //
  //   frameId = requestAnimationFrame(step)
  // }, [])

  // const handlePointerEnter = useCallback((event) => {
  //   event.stopPropagation()
  //   animateScale(event.object, new THREE.Vector3(1.2, 1.2, 1.2)) // Zoom in this card
  // }, [animateScale])
  //
  // const handlePointerLeave = useCallback((event) => {
  //   event.stopPropagation()
  //   animateScale(event.object, new THREE.Vector3(1, 1, 1)) // Reset zoom
  // }, [animateScale])

  // Use the extracted hover functionality
  // const { handlePointerEnter, handlePointerLeave } = useHoverCard()

  const frontUrl = cardMap[code]
  const backUrl = cardMap['CardBacks']
  const [frontTex, backTex] = useLoader(
    THREE.TextureLoader,
    [frontUrl, backUrl]
  )

  const materials = [
    new THREE.MeshStandardMaterial({ color: '#222' }),
    new THREE.MeshStandardMaterial({ color: '#222' }),
    new THREE.MeshStandardMaterial({ color: '#222' }),
    new THREE.MeshStandardMaterial({ color: '#222' }),
    new THREE.MeshStandardMaterial({ map: frontTex }),
    new THREE.MeshStandardMaterial({ map: backTex }),
  ]

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      material={materials}
      castShadow
      receiveShadow
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxGeometry args={[2.5, 3.5, 0.1]} />
    </mesh>
  )
})

export default Card