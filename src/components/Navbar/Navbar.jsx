import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        if (showDropdown)

            setShowDropdown(false)
    }, [pathname])


    return (
        <div className='fixed z-50 w-full flex items-center justify-between drop-shadow-lg bg-white h-20 px-12'>
            <button onClick={() => navigate("/")} className='flex  font-semibold text-2xl sm:text-3xl '>
                <p className='text-red-500'>
                    Blood
                </p>
                <p>Here!</p>
            </button>
            {/* large Screen */}
            <span onClick={() => setShowDropdown(false)} className={` ${showDropdown ? "" : "hidden"} absolute inset-0 h-screen `} />
            <div className=' hidden z-30 md:flex gap-5 '>
                <button onClick={() => navigate("/")} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>Home </button>
                <button onClick={(() => navigate("/about-us"))} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>AboutUs</button>

                <div className='relative '>
                    <button onClick={() => setShowDropdown(!showDropdown)} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md' >Login</button>
                    <div className={` ${showDropdown ? "p-2 px-5 h-40" : " h-0 overflow-hidden"}  absolute drop-shadow-md bg-white items-start  flex flex-col gap-5 w-40  top-12 -left-20 transition-all ease-in-out`}>

                        <button onClick={() => { navigate("/login-page"); setShowDropdown(false) }} >Doner</button>
                        <button>Patient</button>
                        <button>Admin</button>




                    </div>
                </div>
                <button onClick={() => navigate("/registration-page")} className=' transition-all hover:bg-red-500 hover:text-white px-2 rounded-md'>Register</button>


            </div>
            <button onClick={() => setShowMenu(!showMenu)} className='md:hidden'><RxHamburgerMenu /></button>
            {/* Small screen */}
            <div className={` ${showMenu ? "h-52 p-5" : "h-0 overflow-hidden"} md:hidden flex flex-col gap-5 bg-white drop-shadow-lg absolute right-5 top-20 w-40 items-start transition-all ease-in-out  `}>
                <button onClick={() => { navigate("/"); setShowMenu(!showMenu) }}>Home</button>
                <button onClick={(() => { navigate("/about-us"); setShowMenu(!showMenu) })}>AboutUs</button>
                <div className='relative'>
                    <button onClick={() => setShowDropdown(!showDropdown)} >Login</button>
                    <div className={` ${showDropdown ? "" : "hidden"} absolute drop-shadow-md bg-white items-start  flex flex-col gap-5 w-40 p-2 px-5 top-12 -left-20 transition-all ease-in-out`}>
                        <button onClick={() => { navigate("/login-page"); setShowDropdown(!showDropdown); setShowMenu(false) }}>Doner</button>
                        <button>Patient</button>
                        <button>Admin</button>


                    </div>
                </div>


            </div>


        </div>
    )
}

export default Navbar