import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faCalendarDays, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function NewsItem(props) {

    
    console.log(props);
    // Display date
    const [year, month, day] = [...props.date.split("-")];
    const monthIndex = month - 1; // remember that Date's constructor 2nd param is monthIndex (0-11) not month number (1-12)!
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const postDate = new Date(year, monthIndex);
    const postDay = postDate.getDay();
    const postMth = months[postDate.getMonth()];
    const postYear = postDate.getFullYear();
    
   
    return (
        <div className="bg-white rounded-lg my-4 lg:my-5 shadow-lg shadow-btncolor mx-5 overflow-hidden">
            <div className="w-full h-56 relative" >
                <Image src={`/images/${props.img}`} alt={props.title} fill style={{ objectFit:"cover" }}/>
            </div>

            <div className="py-1 px-6">
                <div className="">
                    <h3 className='my-6 font-bold text-lg text-[#a57015]'>{props.title}</h3>
                    <div className='flex justify-start items-center text-sm'>
                        <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: 20 }} className="text-[grey]"/>
                        <h5 className="mx-2 text-[grey] leading-loose">{`${postMth} ${postDay}, ${postYear}`}</h5>
                    </div>
                    <p className="my-6 text-[0.9rem]">{props.content.slice(0, 120)}</p>
                </div>
                <div className="my-4 flex news_btn justify-start items-center bg-secondary hover:bg-primary w-36 rounded-lg py-2 px-3">
                    <Link href={`/posts/${props.id}`} className="text-white">Learn More</Link>
                    <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 15 }} className="mx-2 text-btncolor"/>
                </div>
            </div>

        </div>
    )
}

export default NewsItem