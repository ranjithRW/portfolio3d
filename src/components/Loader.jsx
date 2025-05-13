import React from 'react'
import { Html } from '@react-three/drei' //Html is used to create HTML elements in 3D space

const Loader = () => {
    return (
        //Html creates a 3D HTML element
        //The div contains a loading spinner
        <Html>
            <div className='flex items-center justify-center'>
                <div className='w-16 h-16 border-4 border-opacity-20 border-blue-500 rounded-full animate-spin '>
                </div>
            </div>
        </Html>
    )
}

export default Loader