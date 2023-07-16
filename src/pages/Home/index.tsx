import React from 'react'
import Navbar from '@/Components/Navbar'
import HeroSection from '@/Components/HeroSection'
import AboutSection from '@/Components/AboutSection'
import MenuSection from '@/Components/MenuSection'
import ChefSection from '@/Components/ChefSection'

function Home() {
    return (<div className='max-w-screen-2xl m-auto'>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ChefSection />
        <MenuSection />
    </div >
    )
}

export default Home