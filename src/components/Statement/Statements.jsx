import { statementData } from "../../../pages/api/statementData"
import MajorText from "../Ui/MajorText"
import Statement from "./Statement"
import styles from "./statement.module.css"




function Statements() {
    return (
        <section className={`${styles.statement_bg} bg-center bg-cover bg-no-repeat bg-fixed z-[5] relative lg:p-1 p-4`}>
            <MajorText miniText={`What We Want To Do`} majorText={`Vision and Mision`} smallTitle={`text-siteyellow`} title={`text-white`}/>
            <div className="my-16 lg:max-w-[85%] lg:mx-auto grid grid-cols-1  lg:grid-cols-3 justify-center items-center gap-5">
               
                {
                    statementData.map((item, i) => (
                        <div className="my-4" key={i}>
                            <Statement {...item}/>
                        </div>
                    ))
                }
                
                
            </div>
        </section>
    )
}

export default Statements