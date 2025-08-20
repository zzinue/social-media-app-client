import React, {useContext} from 'react'
import {assets, dummyUserData} from "../assets/assets.js";
import {Link, useNavigate} from "react-router-dom";
import {CirclePlus, LogOut, MenuIcon} from "lucide-react";
import MenuItems from "./MenuItems.jsx";
import {useClerk, UserButton} from "@clerk/clerk-react";

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    const navigate = useNavigate()
    const user = dummyUserData
    const {signOut} = useClerk()
    return (
        <div
            className={`w-60 xl:w-72 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-0 bottom-0 z-20 ${sidebarOpen ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>
            <div className='w-full'>
                <img onClick={() => navigate('/')} src={assets.logo} alt='logo'
                     className='w-26 ml-7 my-2 cursor-pointer'/>
                <hr className='border-gray-300 mb-8'/>
                <MenuItems setSidebarOpen={setSidebarOpen}/>

                <Link to='/create-post'
                      className=' flex items-center justify-center gap-2 py-2.5 mt-6 mx-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95 transition text-white cursor-pointer'>
                    <CirclePlus className='w-5 h-5'/>
                    Crear Post

                </Link>
            </div>
            <div className='w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between'>
                <div className='flex gap-2  items-center cursor-pointer'>
                    <UserButton/>
                    <div>
                        <h1 className='text-xs text-gray-500'> <p>@{user.username}</p>
                        </h1>
                    </div>

                </div>
                <LogOut onClick={signOut}
                        className='w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer'/>

            </div>

        </div>
    )
}
export default Sidebar
