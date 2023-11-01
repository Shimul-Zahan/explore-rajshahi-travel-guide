import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import { Link, Outlet } from 'react-router-dom'
import { MyContext } from '../Context/AuthContext'

const Dashboard = () => {

    const { user } = useContext(MyContext);
    if (user?.email !== import.meta.env.VITE_ADMIN_EMAIL) {
        return console.log("Admin doesn't match!!")
    }
    return (
        <div>
            <div className='bg-black'>
                <Navbar />
            </div>
            <div className='grid grid-cols-12 gap-10 min-h-screen container mx-auto'>
                <div className='col-span-3 pt-10'>
                    <ul className='list-none text-2xl space-y-6'>
                        <div className='space-y-3'>
                            <li><Link to='/dashboard'>Home</Link></li>
                            <hr className='bg-black h-[4px]' />
                        </div>
                        <div className='space-y-3'>
                            <li><Link to='/dashboard/add-district'>Add District</Link></li>
                            <hr className='bg-black h-[4px]' />
                        </div>
                        <div className='space-y-3'>
                            <li><Link to='/dashboard/manage-district'>Manage District</Link></li>
                            <hr className='bg-black h-[4px]' />
                        </div>
                        <div className='space-y-3'>
                            <li><Link to='/dashboard/add-thana'>Add Thana</Link></li>
                            <hr className='bg-black h-[4px]' />
                        </div>
                        <div className='space-y-3'>
                            <li><Link to='/dashboard/manage-thana'>Manage Thana</Link></li>
                            <hr className='bg-black h-[4px]' />
                        </div>
                        <div className='space-y-3'>
                            <li><Link to='/dashboard/add-tourplace'>Add Tourist Place</Link></li>
                            <hr className='bg-black h-[4px]' />
                        </div>
                        <div className='space-y-3'>
                            <li><Link to='/dashboard/manage-tourplace'>Manage Tourist Place</Link></li>
                            <hr className='bg-black h-[4px]' />
                        </div>
                    </ul>
                </div>
                <div className=' col-span-9'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard