import React, { useEffect, useState } from 'react'
import useThana from '../Hooks/useThana'
import { Link, useLoaderData } from 'react-router-dom';
import { GrUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios';
import BgImage from '../assets/update.jpg'
import Title from '../Components/Title';
// import loading from '../assets/loading.gif'



const ManageThana = () => {

    // const { data, isLoading, refetch } = useThana();
    const [data, setData] = useState([]);
    const total = useLoaderData();
    const [items, setItems] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPage = Math.ceil(total.count / items);
    const pages = [...Array(totalPage).keys()]

    // if (isLoading) {
    //     return <div className='h-screen w-full flex justify-center items-center'>
    //         <img src={loading} alt="" />
    //     </div>
    // }

    useEffect(() => {
        axios.get(`http://localhost:5000/thanas?page=${currentPage}&size=${items}`)
        .then(res=> setData(res.data))
    }, [currentPage, items])

    const handleItemPerPage = (e) => {
        // console.log(e.target.value)
        setItems(parseInt(e.target.value))
        setCurrentPage(0)
    }

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    // console.log(data)

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
                <div className='my-20 flex justify-center items-center'>
                    <button onClick={handlePrevious} className='btn'>Previous</button>
                    {
                        pages.map(page => {
                            return <button key={page} onClick={() => setCurrentPage(page)} className={`btn mx-4 ${currentPage === page && 'bg-yellow-500'}`}>{ page }</button>
                        })
                    }
                    <button onClick={handleNext} className='btn'>Next</button>
                    <select onChange={handleItemPerPage} value={items} name="" id="">
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ManageThana