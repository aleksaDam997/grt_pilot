import { usePlane } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber';
import React from 'react'
import { RepeatWrapping, TextureLoader } from 'three';

export default function Rail(props) {
  
    const [ref] = usePlane(() => ( {rotation:[-Math.PI / 2, 0, 0], ...props}));
    const texture = useLoader(TextureLoader, '/web/textures/TexturesCom_Rails0032_3_M.jpg')

    return (
    <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[40, 20]} />
        <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  )
}
