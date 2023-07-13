import React from "react";
import Frame5 from "../../public/Frame 5.png";
import Image from "next/image";
function ChiefSection() {
  return (
    <div className="xl:flex-row  flex flex-col justify-center xl:gap-36 xl:p-28 p-5 items-center m-auto ">
      <div className="space-y-5 p-10 ">
        <p className="gradient-text text-[#FAFAF9CC]">Our Chief</p>
        <div className="xl:p-0 p-2 w-3/4 text-sm space-y-5">
          <p>{`Chef Shaheen, a multi-talented individual who wears many hats in the culinary world. Not only is he a celebrity chef, but he's also an architect, recipe developer, and content creator on social media. Additionally, he is the proud owner of the renowned "YABA" restaurant, which has revolutionized Iraqi cuisine.
`}</p>
          <p>{`          Chef Shaheen's culinary journey took him to the prestigious stage of Master Chef UK, where he showcased the flavors of Iraq and the Middle East with a contemporary twist, ultimately making it to the finals. His dishes are meticulously crafted with finesse, bearing his unique creative touch.
`}</p>
          <p>{`To further share his innovative approach to cooking, Chef Shaheen ventured into the world of entrepreneurship and opened his first restaurant, "YABA," in Dubai. Here, visitor have the opportunity to indulge in a fusion of Iraqi culinary delights intertwined with international flavors.`}</p>
        </div>
      </div>
      <Image className="xl:w-auto xl:h-auto  w-[680px] h-[680px]" alt="frame-5" src={Frame5} />
    </div>
  );
}

export default ChiefSection;
