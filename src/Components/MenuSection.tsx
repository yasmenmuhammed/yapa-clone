import Link from "next/link";
import React from "react";
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
const imageclassName =
    "block h-full w-full rounded-lg object-cover object-center";

function MenuSection() {
    const router = useRouter();

    return (
        <>
            {" "}
            <div className="flex-col justify-center">
                <p className="gradient-text flex justify-center items-start">
                    Our Menu
                </p>
                <ul className="flex justify-center gap-4">
                    <li
                        className={
                            router.pathname == "/Hot-Starters"
                                ? "active underline-colored "
                                : ""
                        }
                    >
                        <Link
                            href="/Hot-Starters
"
                        >
                            Hot Starters
                        </Link>
                    </li>{" "}
                    <li className={router.pathname == "/Soups" ? "active" : ""}>
                        <Link href="/Soups">Soups</Link>
                    </li>
                    <li className={router.pathname == "/Salads" ? "active" : ""}>
                        <Link href="/Salads">Salads</Link>
                    </li>{" "}
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
            </div>
            <div className="p-28 grid xl:grid-cols-3 grid-cols-2 gap-8">
                {frames.map((frame) => (
                    <div key={frame.name} className="bg-[#292524]   rounded-lg">
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
