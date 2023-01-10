import Image from "next/image";

function Loader(){
    return (
        <section className="w-full bg-lightblack flex justify-center items-center flex-col absolute top-0 h-[100vh]">
            <div className="w-44 h-44 lg:w-48 lg:h-48 relative animate-pulse">
                <Image src={require("../../assets/images/ghana_logo.png")} alt="Ghana Logo" fill style={{ objectFit: "cover" }}/>
            </div>
            <div className="my-3">
                <h5 className="text-white font-semibold">Loading...</h5>
            </div>
        </section>
    )
}

export default Loader