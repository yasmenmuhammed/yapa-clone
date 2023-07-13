import React from "react";
import Image from "next/image";
import HeroImage from "./../../public/Hero Image.png";
import Link from "next/link";

function HeroSection() {
    return (
        <div className="flex gap-2 xl:items-center  xl:bg-none heroSection w-full h-auto items-center   align-middle">
            {/* paragraph section */}
            <div className="xl:w-1/2 w-full p-9 space-y-8 ">
                <div className="space-y-5">
                    <p className="xl:text-5xl text-2xl">
                        Discover a New Dimension in Iraqi Cuisine
                    </p>
                    <p>
                        {`                    We infuse our dishes with a non-traditional approach, adding a unique dimension to Iraqi cuisine. Drawing inspiration from the ancient civilizations of Iraq, our culinary creations serve as a bridge between history and modernity, establishing "Yaba" as the embodiment of this connection.
`}
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="primary-button w-[126px] h-[48px]">
                        <Link href="/menu">view menu</Link>
                    </button>

                    <button className="secondary-button w-[125px] h-[48px]">
                        Contact us
                    </button>
                </div>
            </div>
            <Image
                src={HeroImage}
                alt="hero image"
                className="w-[704px] h-[700px] xl:block hidden"
            />
        </div>
    );
}

export default HeroSection;
