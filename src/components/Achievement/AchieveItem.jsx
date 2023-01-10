import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import styles from "./achieve.module.css";


function AchieveItem(props) {
    const [counterOn, setCounterOn] = useState(0);
    


    return (
        <div className={`${styles[props.achieve.classBg]} bg-center bg-cover bg-no-repeat w-full bg-black ${props.achieve.borderList} border-solid flex justify-center items-center py-6 px-12 rounded-md shadow-md flex-wrap flex-col z-[5] relative overflow-hidden`}>
            <div className="flex flex-col h-full mb-12">
                <FontAwesomeIcon icon={props.icon} style={{ fontSize: 50 }} className={`${props.achieve.iconColor}`}/>
            </div>
            <div className="flex flex-col h-full">
                <ScrollTrigger onEnter={() => setCounterOn(props.On)} onExit={() => setCounterOn(!props.On)}>
                    <h3 className={`text-6xl font-extrabold text-center ${props.achieve.countColor} `}>
                        {counterOn && <CountUp start={props.start} end={props.end} duration={props.duration} delay={props.delay}/>}
                        <span className={`mx-1 font-medium ${props.achieve.suffixColor}`}>{props.suffix}</span>
                    </h3>
                    <h5 className={`font-semibold text-lg my-4 text-center ${props.achieve.contentColor} flex flex-col h-full`}>{props.content}</h5>
                </ScrollTrigger>
            </div>

        </div>
    )
}

export default AchieveItem