import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from'@react-three/drei';
import { Suspense, useState, useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
// import Model from './Components/1959_tube_driver_car_-_london_underground';
import {Model } from '.././Components/Bombardier_s_stock_london_underground';
import "./ShowTrain.css";

export default function ShowTrain() {
  return (
    <div className="canvas-container">
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.5} />
            <spotLight intensity={2} position={[-1, 1, 3]} color="red" />
            <spotLight intensity={2} position={[1, 1, 3]} color="blue" />
            <spotLight intensity={2} position={[0, 3, -10]} color="white" />

            <Suspense fallback={null}>
                <Model scale={0.35}  />
            </Suspense>
        </Canvas>
    </div>
  )
}

function Box2(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    // Return view, these are regular three.js elements expressed in JSX
  
    const[positionX, setPosiotionX] = useState(0)
    const[positionY, setPosiotionY] = useState(0)
    const[positionZ, setPosiotionZ] = useState(0)
  
    const bg = useRef();
  
    const movementCoeficient = 0.15;
  
    function handleKeyDown(e) {
      if(e.keyCode === 37){
        console.log("heej")
        setPosiotionX(positionX - movementCoeficient)
      }
  
      if(e.keyCode === 38){
        console.log("heej")
        setPosiotionY(positionY + movementCoeficient)
      }
  
      if(e.keyCode === 39){
        console.log("heej")
        setPosiotionX(positionX +movementCoeficient)
  
      }
  
      if(e.keyCode === 40){
        console.log("heej")
        setPosiotionY(positionY - movementCoeficient)
  
      }
    }
  
    function handleKeyUp(e) {
  
    }
  
    useEffect(() => {
  
      mesh.current.position.set(positionX, positionY, positionZ);
      // bg.current.size.set(4, 3, 5);
      // mesh.current.geometry.scale(2);
  
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      }
    }, [positionX, positionY, positionZ])
  
    return (
      <mesh
        {...props}
        ref={mesh}
        position={[0, 0, 0]}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry ref={bg} args={[1, 1, 1]}  />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }
  
  