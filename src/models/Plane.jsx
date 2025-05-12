import React from 'react'
import { useGLTF } from '@react-three/drei'

import PlaneScene from '../assets/3d/plane.glb'

const Bird = ({isRotating,...props}) => {
    const { scene } = useGLTF(PlaneScene);
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird