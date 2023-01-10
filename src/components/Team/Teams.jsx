import Image from 'next/image'
import MajorText from '../Ui/MajorText'
import Team from './Team'
import { teamData } from '../../../pages/api/teamData';


function Teams() {

    return (
        <section className={`lg:mx-auto p-6 lg:p-10 bg-white`} id={"team"}>
            <MajorText miniText={`Our Visionary and Committed Team`} majorText={`SCAG Officials`} smallTitle={`text-black`} title={`text-sitered`}/>
            <div className="my-28">
                <div className="lg:mx-auto lg:max-w-[70%] lg:my-16 my-4 grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    {
                        teamData.slice(0,2).map((item, i) => (
                            <div key={i}>
                                <Team {...item}/>
                            </div>
                        ))
                    }
                </div>

                <div className="lg:mx-auto lg:max-w-[85%] lg:my-16  my-4 grid grid-cols-1 lg:grid-cols-3 gap-x-8">
                    {
                        teamData.slice(2,5).map((item, i) => (
                            <div key={i}>
                                <Team {...item}/>
                            </div>
                        ))
                    }
                </div>

                <div className="lg:mx-auto lg:max-w-[85%] lg:my-16  my-4 grid grid-cols-1 lg:grid-cols-3 gap-x-8">
                    {
                        teamData.slice(5,8).map((item, i) => (
                            <div key={i}>
                                <Team {...item}/>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Teams