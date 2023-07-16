import React from 'react'
import Navbar from '@/Components/Navbar'
import HeroSection from '@/Components/HeroSection'
import AboutSection from '@/Components/AboutSection'
import MenuSection from '@/Components/MenuSection'
import ChefSection from '@/Components/ChefSection'
import Footer from '@/Components/Footer'

function Home() {
    return (<div className='max-w-screen-2xl m-auto'>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ChefSection />
        <MenuSection />
        <Footer />
    </div >
    )
}

export default Home