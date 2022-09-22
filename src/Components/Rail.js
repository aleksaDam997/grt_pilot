import { usePlane } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber';
import React from 'react'
import { RepeatWrapping, TextureLoader } from 'three';

export default function Rail(props) {
  
    const [ref] = usePlane(() => ( {rotation:[-Math.PI / 2, 0, 0], ...props}));
    const texture = useLoader(TextureLoader, process.env.PUBLIC_URL + 'textures/TexturesCom_Rails0032_3_M.jpg')
    // texture.wrapS = RepeatWrapping;
    // texture.wrapT = RepeatWrapping;
    // texture.repeat.set(100, 100);

    return (
    <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[40, 20]} />
        <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  )
}
