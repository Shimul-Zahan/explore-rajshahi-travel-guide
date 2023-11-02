import React from 'react'
import Title from '../Components/Title'
import BgImage from '../assets/update.jpg'
import useDistricts from '../Hooks/useDistricts'
import { GrUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading from '../assets/loading.gif'

// GrUpdate

const ManageDistrict = ({ children }) => {

    const { data, isLoading, refetch } = useDistricts();
    // console.log(data)

    if (isLoading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <img src={loading} alt="" />
        </div>
    }

    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:5000/districts/${id}`)
        console.log(res.data.deletedCount)
        if (res.data.deletedCount > 0) {
            refetch();
        }
    }

    return (
        <div>
            <Title children={children} />
            <div className='pt-10 text-xl bg-blend-overlay bg-white bg-opacity-80 min-h-[700px]' style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        data?.map(district =>
                            <div key={district?._id} className='border-2 border-black rounded-lg'>
                                <div className='flex justify-between items-center gap-5'>
                                    <img src={district?.imageURL} alt="" className='h-32 w-52' />
                                    <div className='space-y-2'>
                                        <h1 className='text-bold'>Name: {district?.name}</h1>
                                        <h1 className='text-lg'>Description: {district?.shortDesc}</h1>
                                    </div>
                                    <div className='pr-5 space-y-5'>
                                        <Link>
                                            <GrUpdate className='text-2xl text-yellow-500' />
                                        </Link>
                                        <MdDeleteForever onClick={()=> handleDelete(district?._id)} className='text-4xl text-red-500 cursor-pointer' />
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ManageDistrict