import Image from 'next/image'
import Link from 'next/link'


function SectionAbout() {


    return (
        <section className={`lg:max-w-[90%] lg:mx-auto my-20 lg:p-0 p-4`}>

            <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-y-14 gap-x-0 lg:gap-x-20 lg:mt-16 mt-6">


                 <div className="p-6 lg:p-10 lg:mx-0 relative bg-siteyellow flex justify-center items-center z-10">
                    <div className={`w-96 h-96 relative shadow-[rgba(0,0,0,0.5)] shadow-xl rounded-md overflow-hidden z-10 border-4 border-sitered border-solid `}>
                        <Image className="rounded-md" src={require('../../assets/images/scrabble_1.png')} alt={'scrabble board'} style={{ objectFit: "cover" }} fill/>
                    </div>

                    <div className="w-80 h-80 absolute bottom-0 left-0 bg-black">
                        {" "}
                    </div>

                    
                </div>

                 <div className="lg:mx-8 flex-1">
                    <h3 className="text-sitered font-bold text-xl">History of SCAG</h3>
                    <h5 className="my-2 text-3xl lg:text-4xl font-[800] text-black">How It All Began</h5>
                    <div className="page-btn">
                        <p className="my-2 text-[1rem] text-darkash text-justify">Scrabble Association of Ghana was established in 1988 and became affiliated with the National Sports Authority same year. It has seen in the basic, through to the second cycle and the tertiary levels of education in Ghana.   
                        <br />SCAG throughout the years has participated in major international competitions and chalked notable successes.</p>

                        <p className="my-2 text-[1rem] text-justify"> The most recent success is by placing third in the 2022 African Scrabble Championship (ASC) in Lusaka, Zambia. In 2002, Michael Quao won the Mind Sports Olympiad in Coventry, England.</p>
                        <p className="my-2 text-[1rem] text-justify"> The ideals of Scrabble prepare individuals for the unknown; grab opportunities when they come and good decision making. This is drawn from the fact that one does not know what combination of tiles will be drawn from the sack. Scrabble prepares individuals to maintain a constant level of focus and apply various acquired knowledge in diverse areas including basic arithmetic.</p>

                    </div>
                </div> 

            </div>

            <div className="py-4">
                <p className="my-2 text-[1rem] text-justify"> The backbone of any venture is itself a determining factor to its competitiveness. SCAG is privileged to have astute business moguls as its patrons in the persons of Arch. S. M. Quartey (Atelier), Mr. Bennet Kpentey (SYNC Consult), Mr. Gaddy Laryea (MMRS Ogilvy) and Mr. Michael Ofori. The president of the SCAG Mr. Haruna Adamu is himself a security expert and CEO of OJEYZ Security Services. We are confident that with these strong personalities as our backbone, they provide a solid platform for the next level of the game.</p>

                 <div className="my-4 page-btn flex justify-start lg:justify-end items-start lg:items-end flex-col">
                    <Link href={'#team'}>Meet the Team</Link>
                </div>   
            </div>
        </section>
    )
}

export default SectionAbout