import React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import SkyScene from '../assets/3d/sky.glb'

const sky = ({isRotating}) => {
    const sky = useGLTF(SkyScene);
    const skyRef = useRef();
    useFrame((_,delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += delta * 0.25;
        }
    });
    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default sky;