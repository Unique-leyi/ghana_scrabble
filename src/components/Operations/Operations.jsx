import { operationData } from "../../../pages/api/operations";
import MajorText from "../Ui/MajorText"
import Operation from "./Operation";
import styles from "./operations.module.css";
import Link from  "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";


function Operations(){
    return(
        <section className={`${styles.operations_bg} bg-center bg-cover bg-no-repeat z-20 relative py-10`}>
            <MajorText miniText={`Our operational modules are classified under the following programs broadly`} majorText={`Operational Programs`} smallTitle={`text-siteyellow`} title={`text-white`}/>

            <div className="w-full lg:max-w-[85%] lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-y-3 gap-x-4 lg:py-14 p-4">
                {
                    operationData.map((operation, i) => (
                        <Operation {...operation} key={i}/>
                    ))
                }

                <div className="flex justify-center items-center flex-col bg-siteyellow rounded-md space-y-4 space-x-0 lg:p-0 p-6">
                    <h4 className="font-bold text-black my-2 text-xl">For More Info, Contact Us</h4>
                    <div className="flex justify-around items-center p-3 rounded-md font-bold bg-black text-white hover:bg-white hover:text-black gap-x-2 group cursor-pointer">
                        <Link href={`/contact`}>Contact Us</Link>
                        <FontAwesomeIcon icon={faArrowRightLong} style={{ fontSize: 16 }} className="text-white group-hover:-skew-y-[10deg] hover:-skew-y-[10deg] group-hover:text-black hover:text-black"/>
                    </div>  
                    
                </div>
            </div>


        </section>
    )
}

export default Operations