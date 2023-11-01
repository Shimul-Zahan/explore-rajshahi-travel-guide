import React from 'react'
import cover from '/assets/images/coverRajshahi.jpg'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import BannerAnimation from '../assets/bannerAnimation.json'

const Banner = () => {
    return (
        <div className='min-h-screen w-full -mt-[90px] bg-black bg-blend-overlay bg-opacity-80'
            style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className='text-white container mx-auto flex gap-5 lg:gap-32 lg:justify-start items-center min-h-screen flex-col-reverse md:flex-row'>
                <div className='space-y-2 lg:space-y-6 flex flex-col justify-center items-center md:justify-start md:items-start'>
                    <h1 className='text-3xl lg:text-7xl font-thin'>With <span className='text-yellow-500'>Millions</span> of Tourist Places</h1>
                    <div className='bg-yellow-500 w-3/4 lg:w-[800px] py-1 lg:py-3 lg:text-2xl rounded-full'>
                        <Marquee>
                            Sonamasjid of Chapainawabganj, Buddhist Bihar and Kusumba Mosque of Naogaon, the palace of Puthia in Rajshahi, Uttara Ganobhaban of Natore, Mahasthangarh of Bogra and many other historical sites carry various traditions of this division.
                        </Marquee>
                    </div>
                    <h1 className='text-3xl lg:text-6xl font-thin'>Be a Part of Our Family</h1>
                    <div className='pt-6 space-x-5'>
                        <Link className='input input-bordered  bg-transparent border-white py-3 px-6 font-thin rounded-full'>
                            Join Now
                        </Link>
                        <Link className='input input-bordered  bg-transparent border-white py-3 px-6 font-thin rounded-full'>
                            Explore Now
                        </Link>
                    </div>
                </div>
                <div>
                    <Lottie animationData={BannerAnimation}></Lottie>
                </div>
            </div>
        </div>
    )
}

export default Banner