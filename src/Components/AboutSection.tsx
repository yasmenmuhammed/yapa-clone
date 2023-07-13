import Image from "next/image";
import React from "react";
import Frame1 from "../../public/Frame 1.png";
import Frame2 from "../../public/Frame 2.png";
import Frame3 from "../../public/Frame 3.png";
import Frame4 from "../../public/Frame 4.png";

function AboutSection() {
    return (
        <div className="xl:flex-row flex flex-col xl:justify-center  p-5  space-x-5  xl:items-center">
            <div className="flex xl:space-y-8 justify-center xl:order-1 order-2 w-full xl:w-1/2 space-x-8 ">
                {/* paragraph section */}
                <div className="space-y-8">
                    <Image className="w-[324px] h-[302px]" alt="frame-1" src={Frame1} />
                    <Image className="w-[324px] h-[302px]" alt="frame-2" src={Frame2} />
                </div>
                <div className="space-y-8">
                    <Image className="w-[324px] h-[302px]" alt="frame-3" src={Frame3} />
                    <Image className="w-[324px] h-[302px]" alt="frame-4" src={Frame4} />
                </div>
            </div>
            <div className=" xl:w-1/2 w-5/6 xl:order-2  order-1 mb-8 xl:p-0 p-5 space-y-5">
                <p className="gradient-text">Our Story</p>
                <p className="text-[#FAFAF9CC]">{`"Yaba" made its debut as the world's pioneering modern Iraqi restaurant In 2022. With our innovative approach, we reimagine traditional Iraqi cuisine into a multi-dimensional culinary experience. Inspired by the ancient civilizations of Iraq, our culinary creations pay homage to the rich heritage of the region. By seamlessly blending history with contemporary elements, "Yaba" emerges as a remarkable bridge connecting the realms of antiquity and modernity.`}</p> </div>
        </div>
    );
}

export default AboutSection;
