import React, { useRef, useEffect } from 'react' //useRef is used to reference the 3D plane in the scene. 
import { useGLTF, useAnimations } from '@react-three/drei'//useAnimations extracts animation clips. useGLTF loads the .glb plane model

import PlaneScene from '../assets/3d/plane.glb'

const Plane = ({ isRotating, ...props }) => {

    const ref = useRef();// planeRef refers to the mesh containing the plane

    const { scene, animations } = useGLTF(PlaneScene);// animations contains animation clips

    const {actions } = useAnimations(animations, ref);// useAnimations is used to manage the plane's animations. It takes the loaded animations and the reference to the plane mesh.

    // Starts the takeoff animation once when the component mounts
    useEffect(() => {
        if (isRotating) {
           actions["Take 001"].play();
        }
        else {
            actions["Take 001"].stop();
        }
    }, [actions, isRotating]);


    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane