import { usePlane } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber';
import React from 'react'
import { RepeatWrapping, TextureLoader } from 'three';

export default function Grass(props) {
  
    const [ref] = usePlane(() => ( {rotation:[-Math.PI / 2, 0, 0], ...props}));
    const texture = useLoader(TextureLoader, process.env.PUBLIC_URL + 'textures/TexturesCom_Grass0197_3_M.jpg')
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(100, 100);


    return (
    <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  )
}
