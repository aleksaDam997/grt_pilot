import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function Sound({ url, play }) {
    const sound = useRef()
    const [listener] = useState(() => new THREE.AudioListener())
    const buffer = useLoader(THREE.AudioLoader, url)

    useEffect(() => {


        if(play === true){
            console.log("radi")
            sound.current.setBuffer(buffer)
            sound.current.setRefDistance(1)
            sound.current.setLoop(false)
            sound.current.play()
        }
        
        if(play === false){
            console.log("ne radi")
            sound.current.currentTime = 0
            sound.current.setLoop(false);

            sound.current.pause();
        }


    }, [play, url])
    return <positionalAudio ref={sound} args={[listener]} />
  }