import Image from "next/image"
import Link from "next/link"

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
    return (
        <nav className="w-full lg:max-w-[85%] lg:mx-auto grid grid-cols-2 justify-between items-center py-3 px-4 z-20 position-sticky">
            <div className="flex justify-start items-center">
                <div className="w-[7rem] h-[5rem] relative">
                   <Link href={"/"}>
                        <Image src={require("../../assets/images/ossa_logo.png")}  alt={"Scag logo"} style={{ objectFit: "cover" }}/>
                    </Link>
                </div>
            </div>


            <div className={`${props.styleName} flex justify-around items-center`}>
                {
                    NAV_LINKS.map((item, i) => (
                        <Link href={item.path} key={i}>{item.display}</Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar