import React, { useContext } from 'react'
import { GiBinoculars } from 'react-icons/gi';
import { AiFillDashboard, AiFillHome, AiOutlineDashboard } from 'react-icons/ai';
import { BiListCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/AuthContext';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const Navbar = () => {

    const { user } = useContext(MyContext);
    const logOut = () => {
        signOut(auth)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    // console.log(import.meta.env.VITE_ADMIN_EMAIL)

    return (
        <div className="navbar container mx-auto text-white py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div className='hidden lg:block'>
                        <div className='flex justify-center items-center'>
                            <GiBinoculars className='text-5xl' />
                            <h1 className=' text-4xl '>Explore Rajshahi</h1>
                        </div>
                    </div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle block lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li>
                            <Link to='/'><span></span>Home</Link>
                        </li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Registration</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <div className='lg:hidden'>
                    <div className='flex justify-center items-center gap-2 text-2xl  lg:text-4xl'>
                        <GiBinoculars className='' />
                        <h1 className=''>Explore Rajshahi</h1>
                    </div>
                </div>
                <ul className='justify-center items-center list-none gap-10 text-xl hidden lg:flex'>
                    <li>
                        <div className='flex justify-center items-center gap-1'>
                            <AiFillHome />
                            <Link to='/'>Home</Link>
                        </div>
                    </li>
                    <li>
                        <div className='flex justify-center items-center gap-1'>
                            <BiListCheck className='text-3xl' />
                            <Link to='/tourlist'>Tour-List</Link>
                        </div>
                    </li>
                    {
                        user ?
                            <li><Link onClick={logOut}>LogOut</Link></li> :
                            <li><Link to='/login'>Login</Link></li>
                    }
                    {
                        user && <li><Link className='border-2 py-1 px-2 rounded-full text-yellow-500'>{user?.displayName}</Link></li>
                    }
                    {
                        user?.email == import.meta.env.VITE_ADMIN_EMAIL && (
                            <li>
                                <Link>
                                    <div className='flex justify-center items-center gap-1'>
                                        <AiFillDashboard className='text-2xl' />
                                        <Link to='/dashboard'>Dashboard</Link>
                                    </div>
                                </Link></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar