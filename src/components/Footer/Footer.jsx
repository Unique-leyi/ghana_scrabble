import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css"
import Image from 'next/image'


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
            path: '/news',
            display: 'News'
        },
        
        {
            path: '/resources',
            display: 'Resources'
        },

        {
            path: '/gallery',
            display: 'Gallery'
        },

        {
            path: '/contact',
            display: 'Contact-Us'
        }
    ];

    const date = new Date();
    const year = date.getFullYear();


function Footer() {
    return (
        
          <footer className={`bg-[#091809fd] flex justify-center items-center flex-col p-6`}>
            <section className="w-full lg:w-[80%]  lg:flex justify-center lg:justify-around items-center flex-col lg:flex-row my-10">
                 <div className="w-full my-16 lg:my-2 md:my-1 lg:w-1/3">
                    <div className="lg:flex items-center flex-col lg:flex-row">
                        <div className="w-32">
                            <Image src={require('../../assets/images/ossa_logo.png')}  alt='Ossa Logo'/>
                        </div>

                        <div className="lg:mx-3">
                            <h5 className="text-white text-lg font-bold uppercase">Ogun State Scrabble Association</h5>
                        </div>

                    </div>


                    <div className='my-6'>
                        <p className='text-white text-sm'>Established in Febuary, 1976. The OSSA board is made up of highly knowledgeable and passionate Scrabble personalities as members of the Board
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className='my-8'>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: 16, color: '#fdba74' }}/>
                            <h5 className='text-white mx-4 text-sm font-bold'>+234 803 639 9087</h5>
                        </div>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 16, color: '#fdba74' }}/>
                            <h5 className='text-white mx-4 text-sm font-bold'>info@ogunscrabbleassociation.com</h5>
                        </div>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: 16, color: '#fdba74' }}/>
                            <h5 className='text-white mx-4 text-sm font-medium'>Alake Sports Centre, Ijeja Abeokuta, Ogun State.</h5>
                        </div>

                    </div>
                    {/* /Contact Info */}



                </div>

                <div className="w-full my-16 lg:my-2 md:my-1 lg:w-1/3">
                    <h5 className=" my-4 lg:my-0 font-bold text-white text-2xl lg:text-center">Quick Links</h5>
                    <div className='flex justify-start lg:my-2  lg:justify-center lg:items-center flex-col quick'>
                        {
                            NAV_LINKS.map((item, i) => (
                                <Link href={item.path} key={i}>{item.display}</Link>
                            ))
                        }
                    </div>
                </div>

                <div className="w-full my-2 md:my-1 lg:w-1/3">
                     <h5 className='font-bold text-white text-2xl lg:text-center'>Our Social Media</h5>
                     <p className="text-white my-1 lg:text-center"> Follow Us on all Our Social Media Platforms </p>
                     <div className='flex justify-start lg:justify-center items-center my-3'>
                        <a href="#" className="bg-btncolor hover:bg-primary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-facebook-circle-fill text-xl"></i></a>
                        <a href="#" className="bg-btncolor hover:bg-primary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-telegram-fill text-xl"></i></a>
                        <a href="#" className="bg-btncolor hover:bg-primary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-instagram-fill text-xl"></i></a>
                        <a href="#" className="bg-btncolor hover:bg-primary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-twitter-fill text-xl"></i></a>
                    </div>

                </div>


            </section>

            
            
            <hr className="border-1 my-4 border-[#dbd9d9] border-solid w-10/12 block"/>
            <section className="my-1">
                <div className="my-2">
                    <p className="text-white text-center text-sm lg:text-lg font-medium">&copy; Copyright {year} | Ogun State Scrabble Association (OSSA)</p>
                </div>
            </section>
            
        </footer>

    )
}



export default Footer