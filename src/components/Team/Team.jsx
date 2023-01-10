import Image from 'next/image'

function Team(props) {

// bg-[#071607]
// bg-[#0c240c]
    return (
        <div className="relative overflow-hidden flex-1 bg-white border-l-8 border-solid border-siteyellow w-full hover:scale-[1.02] my-4 lg:my-0 transition-all duration-300 cursor-pointer transform shadow-xl flex justify-center items-center flex-col lg:mx-4 rounded-md p-1 group">
            <div className="w-56 h-56  lg:w-48 lg:h-48  overflow-hidden my-6 rounded-[100%] border-4 flex justify-center items-center border-sitegreen border-solid relative">
                <Image src={props.image} alt={`Team Image`} fill style={{ objectFit: "cover" }}/>
            </div>

            <div className="flex-1 flex justify-center items-center flex-col my-4">
                <div className="mx-4">
                    <h3 className="font-bold text-xl text-black text-center">{props.name}</h3>
                    <h5 className="my-1 text-sitered text-center font-semibold">{props.occupation}</h5>
                </div>
                <div className="mx-8 my-4 lg:my-4 flex-1 flex justify-center items-center">
                        <a href="#" className="bg-black mx-2 text-center hover:text-primary transition-all duration-150 py-1 px-3 rounded-sm text-siteyellow"><i className="ri-instagram-fill text-xl"></i></a>
                        <a href="#" className="bg-black mx-2 text-center hover:text-primary transition-all duration-150 py-1 px-3 rounded-sm text-siteyellow"><i className="ri-facebook-fill text-xl"></i></a>
                        <a href="#" className="bg-black mx-2 text-center hover:text-primary transition-all duration-150 py-1 px-3 rounded-sm text-siteyellow"><i className="ri-linkedin-fill text-xl"></i></a>
                </div>
            </div>

            {/* More Team Info */}
            <div className="group-hover:block hover:block hidden absolute w-full h-full bg-black left-0 top-0 overflow-y-auto more-info">

                <div className="m-6">
                    <p className="text-sm text-white"> {props.details} </p>
                </div>

                <div className="flex justify-around items-center px-3 bg-secondary fixed bottom-0 left-0 right-0 w-full">
                    <div className="w-14 h-14  lg:w-14 lg:h-14  overflow-hidden my-6 rounded-[100%] border-2 flex justify-center items-center border-siteyellow border-solid">
                        <Image src={props.image} alt={`Team Image`}  />
                    </div>

                    <div>
                        <h5 className="text-xl font-inter text-white font-bold">{props.name}</h5>
                        <h5 className="my-1 text-[#d3d2d26e] text-center lg:text-left">{props.occupation}</h5>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Team