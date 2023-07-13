import React from 'react'
import Navbar from '../../Components/Navbar'
import HeroSection from '../../Components/HeroSection'
import AboutSection from '@/Components/AboutSection'
import ChiefSection from '@/Components/ChiefSection'
import MenuSection from '@/Components/MenuSection'

function Home() {
    return (<div className='max-w-screen-2xl m-auto'>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ChiefSection />
        <MenuSection />
    </div >
    )
}

export default Home