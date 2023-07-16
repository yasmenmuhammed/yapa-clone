import Image from "next/image";
import React from "react";
import Logo from "../../public/Logo.png";
import Link from "next/link";
function Footer() {
    return (<div className="xl:space-y-[118px] md:space-y-10 space-y-3 p-4 md:mt-0 mt-5 md:px-32  md:text-small  text-[12px]">
        <Image src={Logo} alt="logo" className="md:hidden block mb-8" />

        <div className="footer w-full grid xl:grid-cols-6 md:grid-cols-5 grid-cols-4 md:gap-4 gap-2 items-baseline ">
            <Image src={Logo} alt="logo" className="hidden md:block" />
            <div className="space-y-8 flex flex-col">
                <Link href="#">Instgram</Link>
                <Link href="#">Facebook</Link>
            </div>
            <div className="space-y-8 flex flex-col">
                <Link href="#">Menu</Link>
                <Link href="#">Our store</Link>
                <Link href="#">Our chief</Link>
            </div>
            <div className="space-y-8 flex flex-col">
                <Link href="#">Contact us</Link>
                <Link href="#">info@yabarest.com</Link>
                <Link href="#">+971 58 583 0332</Link>
            </div>
            <div className="space-y-8 md:flex flex-col hidden ">
                <Link href="#">Location</Link>
                <Link href="#">Dubai, UAE</Link>
                <Link href="#">Jumeirah 1, Wasl Vita Mall, shop no. S31</Link>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115513.24916344925!2d55.255743!3d25.210336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4269b55984ef%3A0x1611426ed2e59dac!2sWasl%20Vita!5e0!3m2!1sen!2sus!4v1689485588364!5m2!1sen!2sus"
                className="hidden xl:block xl:w-[250px] xl:h-[200px]"
                loading="lazy"
            ></iframe>
        </div>
        <div className="space-y-8 md:hidden flex flex-col">
            <Link href="#">Location</Link>
            <Link href="#">Dubai, UAE</Link>
            <Link href="#">Jumeirah 1, Wasl Vita Mall, shop no. S31</Link>
        </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115513.24916344925!2d55.255743!3d25.210336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4269b55984ef%3A0x1611426ed2e59dac!2sWasl%20Vita!5e0!3m2!1sen!2sus!4v1689485588364!5m2!1sen!2sus"
            className="md:w-[323px] md:h-[210px] w-[90%] xl:hidden xl:w-[250px] xl:h-[200px]"
            loading="lazy"
        ></iframe>
        <div className="text-center space-y-1">
            <div className="w-full m-auto bg-[#FAFAF94D] h-[1px]"></div>
            <p>
                Copyright @2023 YABA. All rights reserved.  2023 YABA. All rights reserved.
            </p>
        </div>
    </div>

    );
}

export default Footer;
