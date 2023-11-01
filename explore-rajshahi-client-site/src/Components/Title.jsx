import React from 'react'
import before from './title.css'

const Title = ({ children }) => {
    return (
        <div className='container mx-auto relative'>
            <h1 className='text-[120px] font-bold opacity-90 -z-10 text-[#efeeee] absolute top-0 left-0'>{children}</h1>
            <div className='relative lg:pt-24'>
                <div className='bg-yellow-500 h-20 w-2 absolute'></div>
                <h1 className="text-7xl font-bold ml-5">{children}</h1>
            </div>
        </div>
    )
}

export default Title