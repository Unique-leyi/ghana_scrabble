import ContactCard from "./ContactCard";
// import the icons you need
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from './info.module.css'

const contactInfo = [
    {
        contactIcon: faPhoneAlt,
        info: "+234 903 373 3492",
    },

    {
        contactIcon: faEnvelope,
        info: "info@panafricanscrabbleassociation.com",
    },

    {
        contactIcon: faMapMarkerAlt,
        info: "Room 4, 3rd Floor, Nelson Ibilola, House 82, Allen Avenue, Ikeja, Lagos, Nigeria.",
    }

    
]

function ContactInfo() {
    return (
        <section className={`${styles.info_bg} bg-center bg-cover bg-no-repeat overflow-hidden relative lg:absolute  lg:-top-[34rem] left-0 right-0 lg:max-w-[85%] lg:mx-auto rounded-md py-6 px-4 flex justify-center items-center flex-col z-[6] shadow-lg shadow-lightblack border-b-[6px] border-solid border-siteyellow`}>
            <div className="my-8 lg:my-2 flex justify-center items-center flex-col">
                <h5 className="text-white text-3xl lg:text-5xl font-bold text-center">Get In Touch</h5>
                <p className="text-white my-2 text-center">For More Informations, or Complaints, Send us a message</p>
            </div>


            <div className="container mx-auto my-1 grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:gap-x-8 gap-y-10 p-6 relative">
                {
                    contactInfo.map((item, i) => (
                        <ContactCard {...item} key={i}/>
                    ))
                }
            </div>

            <div className='flex justify-center items-center my-4'>
                <a href="#" className="bg-siteyellow hover:bg-siteblue hover:text-secondary transition-all duration-150 py-1 px-2 mx-2 rounded-full hover:bg-white text-black"><i className="ri-facebook-circle-fill text-lg"></i></a>
                <a href="#" className="bg-siteyellow hover:bg-siteblue hover:text-secondary transition-all duration-150 py-1 px-2 mx-2 rounded-full hover:bg-white text-black"><i className="ri-telegram-fill text-lg"></i></a>
                <a href="#" className="bg-siteyellow hover:bg-siteblue hover:text-secondary transition-all duration-150 py-1 px-2 mx-2 rounded-full hover:bg-white text-black"><i className="ri-instagram-fill text-lg"></i></a>
                <a href="#" className="bg-siteyellow hover:bg-siteblue hover:text-secondary transition-all duration-150 py-1 px-2 mx-2 rounded-full hover:bg-white text-black"><i className="ri-twitter-fill text-lg"></i></a>
            </div>
        </section>

    )
}


export default ContactInfo