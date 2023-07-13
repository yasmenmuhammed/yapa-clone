import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import Logo from '../../public/Logo.png'

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (<>

        <div className='flex h-[100px] text-sm w-full  items-end justify-around fixed '>
            <Image src={Logo} className='md:w-auto md:h-auto w-[108px] h-[40px]' alt='logo' />
            <div className='  pb-2 md:gap-8 gap-0 md:flex hidden'>
                <Link href='/'>Home</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/our-store'>Our Store</Link>
                <Link href='/know-chief'>know the chief</Link>
                <Link href='/awards'>Awards</Link>

            </div>
            <div>

                <div className='flex gap-3 relative'>
                    <div className="md:hidden">
                        <button className="navbar-burger flex items-center  p-3" onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                        <div
                            className={
                                "md:flex absolute top-12 bg-black w-full flex-grow items-center" +
                                (navbarOpen ? " flex" : " hidden")
                            }
                            id="example-navbar-danger"
                        >
                            <div className=' flex flex-col space-y-3 '>
                                <Link href='/'>Home</Link>
                                <Link href='/menu'>Menu</Link>
                                <Link href='/our-store'>Our Store</Link>
                                <Link href='/know-chief'>know the chief</Link>
                                <Link href='/awards'>Awards</Link>

                            </div>

                        </div>
                    </div>

                    <p className='flex  items-center'>
                        EN|
                    </p>
                    <button className='primary-button w-[114px] h-[40px]'>Contact us</button>

                </div>

            </div>


        </div>

    </>
    )
}

export default Navbar