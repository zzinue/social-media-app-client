import React, {useEffect} from 'react'
import {assets} from "../../assets/assets.js";
import {Star} from "lucide-react";
import {SignIn}from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react';
import {useNavigate} from "react-router-dom";


const Login = () => {
    // const { isSignedIn } = useUser();
    // const navigate = useNavigate();
    //
    // useEffect(() => {
    //     if (isSignedIn) {
    //         navigate('/layout'); // o la ruta que quieras mostrar después del login
    //     }
    // }, [isSignedIn, navigate]);


    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            {/*backgros*/}
            <img src={assets.bgImage} alt='' className='absolute top-0 -z-1 left-0 w-full h-full object-cover' />
            {/*left side: branding */}
            <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40 '>
                <img src={assets.logo} className='h-12 object-contain' alt=''/>
                <div>
                <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
                <img src={assets.group_users} className='h-8  md:h-10' alt=''/>
                    <div>
                        <div className='flex'>
                            {Array(5).fill(0).map((_, i) => (<Star key={i} className='size-4 md:size-4.5 text-transparent fill-amber-500'/>))}
                        </div>
                        <p>Probado por +1200 developers</p>
                    </div>
                </div>
                    <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent'>Amigos para conectar y convivir</h1>
                    <p className='text-xl md:text-3xl text-indigo-900 max-w-72 md:max-w-md'>Conecta con nuestra comunidad global</p>
                </div>
                <span className='md:h-10'></span>
            </div>
            {/*righ side*/}
            <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
                <SignIn
                    // redirectUrl="/layout"

                />
            </div>
        </div>
    )
}
export default Login
