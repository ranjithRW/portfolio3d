import React from 'react'
import { useGLTF } from '@react-three/drei'

import SkyScene from '../assets/3d/sky.glb'

const sky = () => {
    const sky = useGLTF(SkyScene);
    return (
        <mesh>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default sky;