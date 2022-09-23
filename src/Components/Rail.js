import { usePlane } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber';
import React from 'react'
import { RepeatWrapping, TextureLoader } from 'three';

export default function Rail(props) {
  
    const [ref] = usePlane(() => ( {rotation:[-Math.PI / 2, 0, 0], ...props}));
    const texture = useLoader(TextureLoader, process.env.PUBLIC_URL + 'textures/TexturesCom_Rails0032_3_M.jpg')
    const grass = useLoader(TextureLoader, process.env.PUBLIC_URL + 'textures/TexturesCom_Grass0197_3_M.jpg')
    grass.wrapS = RepeatWrapping;
    grass.wrapT = RepeatWrapping;
    grass.repeat.set(100, 100);

    return (
    <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[40, 20]} />
        <meshStandardMaterial map={grass} attach="material" />
        <meshStandardMaterial map={texture} attach="material" />

    </mesh>
  )
}
