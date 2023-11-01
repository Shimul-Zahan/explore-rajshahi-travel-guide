import React from 'react'
import useThana from '../Hooks/useThana'
import { Link } from 'react-router-dom';
import { GrUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios';
import BgImage from '../assets/update.jpg'
import Title from '../Components/Title';


const ManageThana = () => {

    const { data, isLoading, refetch } = useThana();
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>
    }

    console.log(data)

    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:5000/thanas/${id}`)
        // console.log(res.data.deletedCount)
        if (res.data.deletedCount > 0) {
            refetch();
        }
    }

    return (
        <div>
            <Title children={`Total ${data?.length} Thana Found`} ></Title>
            <div className='pt-10 text-xl bg-blend-overlay bg-white bg-opacity-80 min-h-[700px]' style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        data?.map(thana =>
                            <div key={thana?._id} className='border-2 border-black rounded-lg'>
                                <div className='flex justify-between items-center gap-5'>
                                    <img src={thana?.imageURL} alt="" className='h-32 w-52' />
                                    <div className='space-y-2'>
                                        <h1 className='font-bold'>Name: {thana?.thanaName}</h1>
                                        <h1 className='font-thin'>District: {thana?.distarict}</h1>
                                        <h1 className='text-lg'>Description: {thana?.shortDesc}</h1>
                                    </div>
                                    <div className='pr-5 space-y-5'>
                                        <Link>
                                            <GrUpdate className='text-2xl text-yellow-500' />
                                        </Link>
                                        <MdDeleteForever onClick={() => handleDelete(thana?._id)} className='text-4xl text-red-500 cursor-pointer' />
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

export default ManageThana