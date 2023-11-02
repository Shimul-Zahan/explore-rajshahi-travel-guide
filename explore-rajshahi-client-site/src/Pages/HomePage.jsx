import React from 'react'
import Banner from '../Components/Banner'
import Title from '../Components/Title'
import loading from '../assets/loading.gif'
import useDistricts from '../Hooks/useDistricts'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const { data, isLoading } = useDistricts()
    console.log(data)

    if (isLoading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <img src={loading} alt="" />
        </div>
    }

    return (
        <div className='mb-20'>
            <div>
                <Navbar />
            </div>
            <Banner />
            <Title children={`Total ${data?.length} Districts Found`} />
            <div className='grid grid-cols-3 pt-20 gap-y-20 container mx-auto'>
                {
                    data?.map(district =>
                        <Link to={`/districts/${district?.name}`} key={district?._id}>
                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-center dark:bg-black"></div>
                                <div className="group relative m-0 flex h-72 w-96  rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                        <img src={district?.imageURL} className=' w-full h-full' alt="" />
                                    </div>
                                    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                                        <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{district?.name}</h1>
                                        <h1 className="text-sm font-light text-gray-200 shadow-xl">Go To {district?.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default HomePage