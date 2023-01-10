import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css"
import Image from 'next/image'
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

    const date = new Date();
    const year = date.getFullYear();


function Footer() {

    const [show, setShow] = useState(false);

    return (
        


          <footer className={`${styles.footer_bg} bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col p-6 z-[5] relative`}>
            <section className="w-full lg:w-[85%]  grid lg:grid-cols-3 justify-start items-start my-8">
                 <div className="w-full">
                    <div className="lg:flex justify-center items-center flex-col lg:flex-row mb-8">
                        <div className={`w-20 h-20 relative lg:my-0 mb-4`}>
                            <Link href={`/`}><Image src={require('../../assets/images/ghana_logo.png')} alt={`Panasa Logo`} width={100} height={100} style={{ objectFit: "cover" }}/></Link>
                        </div>

                        <div className="lg:mx-3">
                            <h5 className="text-white text-lg font-bold uppercase">Ghana Scrabble Association</h5>
                        </div>

                    </div>


                    <div className='my-2'>
                        <p className='text-white text-[0.8rem]'>SCRABBLE® is a registered trademark. All intellectual property rights in and to the game are owned in the US by Hasbro Inc, in Canada by Hasbro Canada Inc and throughout the rest of the world by JW Spear & Sons Ltd of Maidenhead, SL6 4UB, England, a subsidiary of Mattel Inc.<br/> Mattel and Spear are not affiliated with Hasbro or Hasbro Canada.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className='my-8'>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: 16 }} className="bg-siteyellow text-black p-2 rounded-md text-deep"/>
                            <h5 className='text-white mx-4 text-sm font-medium'>+233 267 771 857</h5>
                        </div>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 16 }} className="bg-siteyellow text-black p-2 rounded-md text-deep"/>
                            <h5 className='text-white mx-4 text-sm font-medium'>info@scrabbleghana.com</h5>
                        </div>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: 16 }} className="bg-siteyellow text-black p-2 rounded-md text-deep"/>
                            <h5 className='text-white mx-4 text-sm font-medium'>Media Center, Accra Sport Stadium, Accra, Ghana.</h5>
                        </div>

                    </div>
                    {/* /Contact Info */}



                </div>

                <div className="w-full my-16 lg:my-2 ">
                    <h5 className=" my-4 lg:my-0 font-bold text-white text-2xl lg:text-center">Quick Links</h5>
                    <div className='flex justify-start lg:my-8  lg:justify-center lg:items-center flex-col quick'>
                        {
                            NAV_LINKS.map((item, i) => (
                                <Link href={item.path} key={i}>{item.display}</Link>
                            ))
                        }
                    </div>
                </div>

                <div className="w-full">
                     <h5 className='font-bold text-white text-2xl '>Get Latest Updates</h5>
                     <p className="text-white my-1"> Sign Up to Our Newsletter</p>
                     <div className="bg-white flex justify-between items-center w-full rounded-full focus-within:border-solid focus-within:border-siteyellow  focus-within:border-2 p-1 my-12 overflow-hidden">
                        <input name="newsletter" type="text" className="border-none outline-none text-[#000] w-full block px-4 text-[1rem]" placeholder="Enter Your Email"/>
                        <button className="bg-siteyellow rounded-full grid grid-cols-2 items-center p-2 w-[70%]">
                            <span className="text-black font-semibold text-lg ml-6">Send</span>
                            <i className="ri-send-plane-fill font-bold text-3xl text-black"></i>
                        </button>
                     </div>

                </div>


            </section>

            
            
            <hr className="border-t-[1px] border-solid border-[#24333e] lg:my-1 w-10/12 block"/>
            <section className="lg:my-1 grid grid-cols-1 lg:grid-cols-2 justify-center lg:justify-between items-center lg:p-0 p-4 gap-y-8 lg:gap-x-40">
                <div className="lg:my-2">
                    <p className="text-white text-center text-sm lg:text-[1rem] font-normal">&copy; Copyright {year} | Ghana Scrabble Association (SCAG)</p>
                </div>


                <div className="w-full lg:ml-16">
                     
                     <div className='flex justify-center items-center my-6'>
                        <a href="#" className="bg-siteyellow hover:bg-black hover:text-siteyellow transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-black"><i className="ri-facebook-circle-fill text-lg"></i></a>
                        <a href="#" className="bg-siteyellow hover:bg-black hover:text-siteyellow transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-black"><i className="ri-telegram-fill text-lg"></i></a>
                        <a href="#" className="bg-siteyellow hover:bg-black hover:text-siteyellow transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-black"><i className="ri-instagram-fill text-lg"></i></a>
                        <a href="#" className="bg-siteyellow hover:bg-black hover:text-siteyellow transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-black"><i className="ri-twitter-fill text-lg"></i></a>
                    </div>

                </div>
            </section>
            
        </footer>
            


    )
}



export default Footer