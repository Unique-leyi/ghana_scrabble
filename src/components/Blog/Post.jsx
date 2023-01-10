import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faPenSquare, faComment, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


 function Post(props) {
    return (
        <div className="flex-1 p-2 flex justify-center items-center flex-col relative bg-white rounded-md cursor-pointer shadow-lg shadow-siteyellow ">
            <div className="w-full h-[22rem] lg:h-64 relative rounded-md p-2">
               <Image src={props.image} alt="post image" className="rounded-md post-img" style={{ objectFit: "cover" }} fill/>
                <div className="absolute top-0 my-1 left-2 p-3 bg-[rgba(0,0,0,0.8)] border-[1px] border-solid border-white flex justify-center items-center flex-col flex-wrap rounded-b-full">
                    <h6 className="font-semibold text-[1rem] text-white">{props.month}</h6>
                    <h4 className="font-bold text-siteyellow text-lg">{props.day}</h4>
                </div> 
            </div>

            <div className="flex-1 p-4 my-4 bg-black rounded-md w-full lg:mx-auto flex justify-start items-start flex-col flex-wrap h-full">
                <div className="my-2 flex-1 flex-col">
                    <h3 className="text-white font-bold text-xl">{props.title}</h3>
                    <p className="text-[#cdcdcd] text-sm my-2 text-justify">{props.content.slice(0, 100)}</p>
                </div>

                <div className="  my-3 p-3 flex justify-between items-center lg:p-0">

                    <div className="w-full flex justify-around items-center p-3 rounded-sm font-bold bg-siteyellow text-black hover:bg-white gap-x-2 group">
                        <Link href={`/posts/${props.id}`}>Read More</Link>
                        <FontAwesomeIcon icon={faArrowRightLong} style={{ fontSize: 16 }} className="text-black group-hover:-skew-y-[20deg] hover:-skew-y-[20deg]"/>
                    </div>                    
                </div>               
            </div>
        </div>
    )
}

export default Post