import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '../../public/Logo.png'
function Navbar() {
    return (
        <div className='flex h-[100px] text-sm w-full  items-end justify-around fixed '>
            <Image src={Logo} alt='logo' />
            <div className=' flex pb-2 md:gap-8 gap-0 '>
                <Link href='/'>Home</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/our-store'>Our Store</Link>
                <Link href='/know-chief'>know the chief</Link>
                <Link href='/awards'>Awards</Link>

            </div>
            <div className='flex gap-3'>
                <p className='flex  items-center'>
                    EN|
                </p>
                <button className='primary-button w-[114px] h-[40px]'>Contact us</button>
            </div>

        </div>
    )
}

export default Navbar