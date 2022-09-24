import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from'@react-three/drei';
import { Suspense, useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import {Model } from '.././Components/Bombardier_s_stock_london_underground';
import "./ShowTrain.css";
import { Physics } from '@react-three/cannon';
import Rail from '../Components/Rail';
import Grass from '../Components/Grass';
import { Sound } from '../Components/Sound';

export default function ShowTrain() {

  const [animate, setAnimate] = useState(false)

  return (
    <div className="canvas-wrapper">
    <div className='d-flex justify-content-center align-items-center'>
      <p className='mx-2'>Let pessengers in..</p> <button className='btn btn-primary mx-2 mb-2' onClick={() => setAnimate(true)} > Open the dor </button>
       <button className='btn btn-danger mx-2 mb-2' onClick={() => setAnimate(false)} > Reset </button>
    </div>
    <div className="canvas-container">
        <Canvas camera={{ fov: 45, position: [0, 2, -10]}}>
            <OrbitControls />
            <Sky />
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.5}  />

            <Sound url={process.env.PUBLIC_URL + "mixkit-train-door-open-1637.wav"} play={animate} />


            <Physics gravity={[0, -30, 0]}>
            <Suspense fallback={null}>
                <Rail position={[0, -2, 0]}  />
                <Rail position={[40, -2, 0]}  />
                <Rail position={[-40, -2, 0]}  />
                <Grass position={[0, -2.1, 0]} />
                <Model position={[1, -1.9, 0.3]} animate={animate} />
            </Suspense>
            </Physics>
        </Canvas>
    </div>
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
    useFrame((state, delta) => (mesh.current.rotation.x += Math.PI / 45))
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
  
