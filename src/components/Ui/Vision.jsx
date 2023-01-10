import Achieve from '../Achievement/Achieve';

function Vision() {

    return (
        <section className={`w-full bg-ash lg:py-6 lg:px-1 px-4`}>
            <div className="lg:max-w-[85%] lg:mx-auto grid grid-cols-1 justify-around items-center">

                <div className="lg:max-w-[85%] lg:mx-auto my-12 lg:p-0 py-4 flex justify-center items-center flex-col">
                    <h3 className="font-extrabold text-3xl lg:text-4xl text-black text-center">Our BenchMark in Numbers</h3>
                    <p className="my-1 text-[1rem] text-black font-normal text-center">Scrabble is played in millions of homes across Ghana.</p>                  
                </div>

            <Achieve/>


            </div>
        
        </section>
    )
}

export default Vision