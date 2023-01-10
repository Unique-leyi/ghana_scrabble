import Image from 'next/image'
import Link from 'next/link';
import { useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faAward } from "@fortawesome/free-solid-svg-icons";
import styles from "./about.module.css"


function About() {



    return (
        <section className={`w-full lg:max-w-[85%] lg:mx-auto my-4 lg:my-16 lg:p-0 p-4`}>

            <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-16 lg:gap-x-24 my-16">

                <div className="lg:my-16  lg:mx-0">
                    <h3 className="text-sitered font-semibold text-xl">About SCAG</h3>
                    <h5 className="my-2 text-3xl lg:text-5xl text-black font-extrabold font-montserrat">Scrabble, A Mental Sport</h5>
                    <div className="page-btn">
                        <p className="my-8">Scrabble Association of Ghana (SCAG) is a recognized and affiliate sporting discipline under the umbrella of National Sports Authority and Ministry of Youth and Sports. SCAG is also recognized and plays pivotal role in the activities of Ghana Olympic Committee (GOC).  
                        <br />SCAG is therefore the only recognizable Association mandated to organize, develop and promote Scrabble in Ghana. SCAG is also a member of its world governing body World English Language Scrabble Players Association (WESPA) and also a member of its African bloc Pan-African Scrabble Association (PANASA).</p>
                        
                        <Link href={`/about`}>Learn More</Link>
                    </div>
                </div> 

                  <div className="p-6 lg:p-10 lg:mx-0 relative bg-siteyellow flex justify-center items-center z-10">
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