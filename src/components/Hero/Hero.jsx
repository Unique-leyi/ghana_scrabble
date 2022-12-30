import Link from "next/link"

function Hero() {
    return (
        <section className="w-full lg:max-w-[85%] mx-auto flex justify-center items-center">
            <div className="py-28 flex justify-center items-center flex-col gap-3">
                <h2 className="text-white text-5xl lg:text-7xl font-extrabold font-montserrat">Welcome To Ghana</h2>
                <h4 className="text-siteyellow text-3xl lg:text-5xl font-bold">Scrabble Association</h4>
                <p className="text-sm text-ash">The Official Website of Ghana Scrabble Association (SCAG)</p>
                <div className="cta_btn flex justify-around items-center lg:flex-row flex-col lg:gap-x-10 gap-y-5 my-4">
                    <Link href={"/about"}>Learn More</Link>
                    <Link href={"/news"}>Upcoming Events</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero