import Image from 'next/image'
import Link from 'next/link';
import { useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faAward } from "@fortawesome/free-solid-svg-icons";
import styles from "./about.module.css"


function About() {



    return (
        <section className={`w-full lg:max-w-[85%] lg:mx-auto my-16`}>

            <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-x-48 my-16">

                <div className="my-16  mx-8 lg:mx-0">
                    <h3 className="text-sitered font-semibold text-xl">About SCAG</h3>
                    <h5 className="my-2 text-3xl lg:text-5xl text-black font-extrabold font-montserrat">Scrabble Is What We Do Best</h5>
                    <div className="page-btn">
                        <p className="my-8">Pan African Scrabble Association (PANASA) is an international sporting association, a non-governmental, having its own juridical status. PANASA, founded in 1994, consists of all African National Scrabble Associations which are also participating countries of the World English Language Scrabble Players Association Championships (WESPAC) and recognized by World Scrabble Body (WESPA) as the official bodies controlling Scrabble in their respective countries.</p>
                        
                        <Link href={`/about`}>Learn More</Link>
                    </div>
                </div> 

                  <div className="p-0 lg:p-10 lg:mx-0 relative bg-siteyellow flex justify-center items-center z-10">
                    <div className={`w-96 h-96 relative shadow-[rgba(0,0,0,0.5)] shadow-xl rounded-md overflow-hidden  ${styles.award_img} z-10 border-4 border-sitered border-solid `}>
                        <Image className="rounded-md" src={require('../../assets/images/scrabble_1.png')} alt={'scrabble board'} style={{ objectFit: "cover" }} fill/>
                    </div>

                    <div className="w-80 h-80 absolute bottom-0 left-0 bg-black">
                        {" "}
                    </div>

                    
                </div>

            </div>
        </section>
    )
}

export default About