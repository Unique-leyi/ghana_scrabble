import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

 const NAV_LINKS = [
        {
            path: '/',
            display: 'Home'
        },

        {
            path: '/about',
            display: 'About'
        },

        {
            path: '/ratings',
            display: 'Ratings'
        },

        {
            path: '/news',
            display: 'News'
        },
        
        {
            path: '/gallery',
            display: 'Gallery'
        },
        
        {
            path: '/resources',
            display: 'Resources'
        },


        {
            path: '/contact',
            display: 'Contact Us'
        }
    ];

function Navbar(props) {
    const [showResNav, setShowResNav] = useState(false);

    return (
        <nav className="w-full lg:max-w-[85%] lg:mx-auto flex lg:grid grid-cols-2 justify-between items-center py-3 px-4 z-20 sticky">
            <div className="flex justify-start items-center">
                <div className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] relative">
                   <Link href={"/"}>
                        <Image src={require("../../assets/images/ghana_logo.png")}  alt={"Scag logo"} style={{ objectFit: "cover" }}/>
                    </Link>
                </div>
            </div>



            <div className={`${props.styleName} flex justify-center items-center`}>
                
                <div className="w-10 h-10 lg:hidden bg-black hover:bg-siteyellow text-siteyellow hover:text-black rounded-full p-6 flex justify-center items-center flex-col cursor-pointer" onClick={() => setShowResNav(true)}>
                    <i className="ri-menu-3-line text-xl font-extrabold"></i>
                </div>
                <div className={`w-[60%] h-[500vh] lg:h-[initial] lg:w-full ${showResNav ? "flex animate_res" : "hidden"} lg:flex justify-start lg:justify-around lg:items-center items-start lg:flex-row flex-col lg:space-0 space-y-8 lg:bg-[transparent] lg:static transition-all duration-300 ease-in-out fixed top-0 right-0 bg-[rgba(0,0,0,0.95)] lg:z-[initial] z-[10000] lg:p-0 py-20 px-8`}>
                    <span className="lg:hidden text-sitered text-xl font-bold absolute top-10 left-8 right-0" onClick={() => setShowResNav(false)}>X</span>
                    {
                        
                        NAV_LINKS.map((item, i) => (
                            <Link href={item.path} key={i}>{item.display}</Link>
                        ))
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar