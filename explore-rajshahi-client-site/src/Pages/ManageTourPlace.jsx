import React from 'react'
import usePlaces from '../Hooks/usePlaces'
import Title from '../Components/Title';
import BgImage from '../assets/update.jpg'
import { Link } from 'react-router-dom';
import { GrUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import axios from 'axios';

const ManageTourPlace = () => {

  const { data, isLoading, refetch } = usePlaces();
  if (isLoading) {
    return <div>Loading</div>
  }

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/places/${id}`)
    if (res.data.deleteCount > 0) {
      refetch()
    }
  }

  return (
    <div>
      <Title children={`TOtal ${data?.length} Places Found`} />
      <div className='pt-10 text-xl bg-blend-overlay bg-white bg-opacity-80 min-h-[700px]' style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}>
        <div className='grid grid-cols-2 gap-5'>
          {
            data?.map(place =>
              <div key={place?._id} className='border-2 border-black rounded-lg'>
                <div className='flex justify-between items-center gap-5'>
                  <img src={place?.placeImage} alt="" className='h-32 w-52' />
                  <div className='space-y-2'>
                    <h1 className='text-bold'>Name: {place?.placeName}</h1>
                    <h1 className='text-lg'>Description: {place?.detailsLocation}</h1>
                  </div>
                  <div className='pr-5 space-y-5'>
                    <Link>
                      <GrUpdate className='text-2xl text-yellow-500' />
                    </Link>
                    <MdDeleteForever onClick={() => handleDelete(place?._id)} className='text-4xl text-red-500 cursor-pointer' />
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

export default ManageTourPlace