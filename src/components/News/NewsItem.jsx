import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faCalendarDays, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function NewsItem(props) {

    
    // console.log(props);
    // // Display date
    // const [year, month, day] = [...props.date.split("-")];
    // const monthIndex = month - 1; // remember that Date's constructor 2nd param is monthIndex (0-11) not month number (1-12)!
    // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    // const postDate = new Date(year, monthIndex);
    // const postDay = postDate.getDay();
    // const postMth = months[postDate.getMonth()];
    // const postYear = postDate.getFullYear();
    
   
    return (
        <div className="col-span-1 px-2 py-3 bg-white rounded-md border-4 border-solid border-siteyellow overflow-hidden flex flex-col">
            <div className=" flex justify-start items-start flex-col flex-wrap">
                <h3 className='font-bold text-[1rem] text-black'>{props.title}</h3>
                <div className='flex justify-start items-center text-sm flex-wrap'>
                    <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: 16 }} className="text-siteyellow"/>
                    <h5 className="mx-3 text-black leading-loose font-semibold">{`Jan 14th - 20th`}</h5>
                </div>
                {/* <p className="my-6 text-[0.9rem]">{props.content}</p> */}
            </div>
            <div className="mt-2 col-span-1 flex justify-start items-center bg-black hover:bg-siteyellow w-36 rounded-lg py-2 px-3 group cursor-pointer flex-wrap">
                <Link href={`/posts/${props.id}`} className="!text-white !text-sm group-hover:!text-black hover:!text-black !font-semibold">Learn More</Link>
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} className="group-hover:text-black mx-2 text-white hover:text-black"/>
            </div>
    </div>
    )
}

export default NewsItem