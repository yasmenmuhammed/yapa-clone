import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Frame20 from "../../public/Frame 20.png";
import Frame21 from "../../public/Frame 21.png";
import Frame22 from "../../public/Frame 22.png";
import Frame23 from "../../public/Frame 23.png";
import Frame24 from "../../public/Frame 24.png";
import Frame25 from "../../public/Frame 25.png";
import Frame26 from "../../public/Frame 26.png";
import Frame27 from "../../public/Frame 27.png";

const frames = [
    { src: Frame20, name: "Chips Karrada" },
    { src: Frame21, name: "Chips Karrada" },
    { src: Frame22, name: "Chips Karrada" },
    { src: Frame23, name: "Chips Karrada" },
    { src: Frame24, name: "Chips Karrada" },
    { src: Frame25, name: "Chips Karrada" },
    { src: Frame26, name: "Chips Karrada" },
    { src: Frame27, name: "Chips Karrada" },
];

function MenuSection() {
    const router = useRouter();
    const downArrow = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
        <path d="M7.89344 1.4392L4.25726 5.07537C4.22349 5.10918 4.18339 5.136 4.13924 5.1543C4.0951 5.1726 4.04778 5.18202 4 5.18202C3.95221 5.18202 3.9049 5.1726 3.86076 5.1543C3.81661 5.136 3.77651 5.10918 3.74274 5.07537L0.10656 1.4392C0.0383309 1.37097 0 1.27843 0 1.18194C0 1.08544 0.0383309 0.992905 0.10656 0.924675C0.17479 0.856446 0.267329 0.818115 0.36382 0.818115C0.460311 0.818115 0.55285 0.856446 0.62108 0.924675L4 4.30405L7.37892 0.924675C7.4127 0.890892 7.45281 0.864093 7.49695 0.845809C7.54109 0.827526 7.5884 0.818115 7.63618 0.818115C7.68396 0.818115 7.73127 0.827526 7.77541 0.845809C7.81955 0.864093 7.85966 0.890892 7.89344 0.924675C7.92722 0.958459 7.95402 0.998567 7.97231 1.04271C7.99059 1.08685 8 1.13416 8 1.18194C8 1.22971 7.99059 1.27702 7.97231 1.32116C7.95402 1.3653 7.92722 1.40541 7.89344 1.4392Z" fill="#FAFAF9" />
    </svg>
    const upArrow =
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="8px" width="8px" version="1.1" id="Layer_1" viewBox="0 0 330 330">

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" /> </g>

        </svg>
    const [menuOpened, setMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Hot Starters')
    return (
        <>

            <div className="flex-col justify-center space-y-5 mb-5">
                <p className="gradient-text flex justify-center items-start">
                    Our Menu
                </p>
                <ul className=" md:flex hidden justify-center gap-4 md:text-xl text-[10px] bg-[#0C0A09]">
                    <li
                        className={
                            router.pathname == "/Hot-Starters"
                                ? "active"
                                : ""
                        }
                    >
                        <Link
                            href="/Hot-Starters
"
                        >
                            Hot Starters
                        </Link>
                    </li>
                    <li className={router.pathname == "/Soups" ? "active" : ""}>
                        <Link href="/Soups">Soups</Link>
                    </li>
                    <li className={router.pathname == "/Salads" ? "active" : ""}>
                        <Link href="/Salads">Salads</Link>
                    </li>
                    <li className={router.pathname == "/Main-Courses" ? "active" : ""}>
                        <Link href="/Main-Courses">Main Courses</Link>
                    </li>
                    <li className={router.pathname == "/Desserts" ? "active" : ""}>
                        <Link href="/Desserts">Desserts</Link>
                    </li>
                    <li className={router.pathname == "/Drinks" ? "active" : ""}>
                        <Link href="/Drinks">Drinks</Link>
                    </li>
                </ul>
                <div className='flex gap-3 relative  w-full justify-center '>
                    <div className="md:hidden">
                        <button className="navbar-burger flex gap-1 items-baseline " onClick={() => setMenuOpen(!menuOpened)}
                        >
                            <div>
                                {selectedItem}
                            </div>
                            <div >
                                {menuOpened ? upArrow : downArrow}
                            </div>
                        </button>
                        <div
                            className={
                                "md:flex absolute top-12 left-0 bg-black w-full items-center" +
                                (menuOpened ? " flex" : " hidden")
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
                </div>
            </div>
            <div className="md:p-28 grid xl:grid-cols-3 grid-cols-2 gap-8">
                {frames.map((frame) => (
                    <div key={frame.name} className="bg-[#292524]  rounded-lg">
                        <Image
                            src={frame.src}
                            alt={frame.name}
                            className="block w-full object-cover  rounded-lg rounded-b-none "
                        />
                        <div className="flex justify-between w-full p-4">
                            <p>{frame.name}</p>
                            <Link href={"/"} className="text-[#F4C377]">
                                How is it made?
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MenuSection;
