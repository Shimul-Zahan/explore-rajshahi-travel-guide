import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Title from '../Components/Title';

const Thanas = () => {

    const data = useLoaderData();
    // console.log(data)

    return (
        <div className='mb-20'>
            <div className='bg-black'>
                <Navbar />
            </div>
            <div className='container mx-auto'>
                <Title children={`Total ${data?.length} Thana Found in Division`} />
                <div className='grid grid-cols-3 pt-20 gap-y-20 container mx-auto'>
                    {
                        data?.map(thana =>
                            <Link to={`/thanas/${thana?.thanaName}`} key={thana?._id}>
                                <div className="relative overflow-hidden">
                                    <div className="absolute inset-0 bg-center dark:bg-black"></div>
                                    <div className="group relative m-0 flex h-72 w-96  rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                            <img src={thana?.imageURL} className=' w-full h-full' alt="" />
                                        </div>
                                        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                                            <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{thana?.thanaName}</h1>
                                            <h1 className="text-sm font-light text-gray-200 shadow-xl">{thana?.distarict}</h1>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Thanas