import React from 'react'
import { Html } from '@react-three/drei'

const Loader = () => {
    return (
        <Html>
            <div className='flex items-center justify-center'>
                <div className='w-16 h-16 border-4 border-opacity-20 border-blue-500 rounded-full animate-spin '>
                </div>
            </div>
        </Html>
    )
}

export default Loader