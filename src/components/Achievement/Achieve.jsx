import { useState } from 'react';
import AchieveItem from './AchieveItem';
// import the icons you need
import { faUserFriends, faTrophy, faCheckSquare} from "@fortawesome/free-solid-svg-icons";

const ACHIEVEDATA = [
    {
        start: 0,
        end: 100,
        content: 'Members Satisfaction',
        delay: 0,
        suffix: "%",
        icon: faCheckSquare,
        achieve:{
            classBg: "achieve_bg",
            iconColor: "text-white",
            contentColor: "text-white",
            countColor: "text-white",
            suffixColor: "text-white",
            borderList: "border-t-4 border-siteyellow"
        }
    },

    {
        start: 0,
        end: 15,
        content: 'Trophies Won ',
        delay: 0,
        suffix: "+",
        icon: faTrophy,
        achieve:{
            classBg: "achieve_bg_2",
            iconColor: "text-black",
            contentColor: "text-black",
            countColor: "text-black",
            suffixColor: "text-black",
            borderList: "border-t-4 border-black"
        }
    },

    {
        start: 0,
        end: 100,
        content: 'No. Of Tournaments',
        delay: 0,
        suffix: "+",
        icon: faUserFriends,
        achieve:{
            classBg: "achieve_bg_2",
            iconColor: "text-black",
            contentColor: "text-black",
            countColor: "text-black",
            suffixColor: "text-black",
            borderList: "border-b-4 border-black"
        }
    },

    {
        start: 0,
        end: 100,
        content: 'Professional Players',
        delay: 0,
        suffix: "+",
        icon: faUserFriends,
        achieve:{
            classBg: "achieve_bg",
            iconColor: "text-white",
            contentColor: "text-white",
            countColor: "text-white",
            suffixColor: "text-white",
            borderList: "border-b-4 border-siteyellow"
        }
    },
]


function Achieve() {
    const [counterOn, setCounterOn] = useState(true);
   
    return (
        <section className={`w-full flex md:justify-center items-center flex-col p-6 bg-transparent`}>

            <div className="w-full lg:max-w-[98%] lg:mx-auto grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-0">

                {
                ACHIEVEDATA.map((item, i) => (
                    <AchieveItem  key={i} icon={item.icon} start={item.start} end={item.end} delay={item.delay} content={item.content} On={counterOn} suffix={item.suffix} achieve={item.achieve}/>
                ))
            }

            </div>
            

        </section>
    )
}

export default Achieve