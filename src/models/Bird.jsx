import React, { useRef, useEffect } from 'react'//useRef is used to reference the 3D bird in the scene.
import { useGLTF, useAnimations } from '@react-three/drei' //useAnimations extracts animation clips. useGLTF loads the .glb bird model
import BirdScene from '../assets/3d/bird.glb'
import { useFrame } from '@react-three/fiber'//useFrame gives access to the render loop (updates every frame)

const Bird = () => {
    const birdRef = useRef() //birdRef refers to the mesh containing the bird
    const { scene, animations } = useGLTF(BirdScene);//animations contains animation clips

    const { actions } = useAnimations(animations, birdRef)


    //Starts the fly animation once when the component mounts
    useEffect(() => {
        actions['Take 001'].play(); //Plays its flying animation (Take 001)
    }, [])



    //the bird gently bobs up and down using Math.sin() to simulate a flying effect
    useFrame(({ clock, camera }) => {
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        //Horizontal Movement and Direction Change
        if (birdRef.current.position.x > camera.position.x + 10) {
            birdRef.current.rotation.y = Math.PI;
        }
        else if (birdRef.current.position.x < camera.position.x - 10) {
            birdRef.current.rotation.y = 0;
        }


        //The bird turns around when it's too far left or right from the camera.
        //Rotates Y to π (180°) to flip direction.
        //Flipping direction controls the next movement phase.
        if (birdRef.current.rotation.y === 0) {
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        }
        else {
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }

    });

    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef} >
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird