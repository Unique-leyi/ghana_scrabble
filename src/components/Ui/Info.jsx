import Form from './Form';
import ContactInfo from './ContactInfo';
import Map from './Map';


function Info() {


    return (
        <main className="relative">
            
            <ContactInfo/>
            <section className={` w-full lg:max-w-[85%] lg:mx-auto lg:p-0 mt-4 lg:mt-[30rem] grid grid-cols-l lg:grid-cols-2 justify-center items-center gap-y-6`}>


                {/* Form */}
                <div className="bg-white w-full p-8 lg:p-14 my-0 lg:-mt-24 lg:mb-4 h-full rounded-md lg:rounded-r-xl lg:rounded-b-xl border-t-4 border-solid border-siteyellow shadow-lg shadow-siteyellow">
                    <div className="my-2">
                        <h5 className="text-[#000] text-xl my-2">Need more Information?</h5>
                        <h3 className="text-secondary text-3xl lg:text-5xl font-bold"> Leave Us a Message.</h3>
                    </div>

                    <div className="my-4">
                        <Form/>
                    </div>
                </div>
                {/* /Form */}

                <div className="h-full flex flex-col flex-wrap">
                    <Map/>
                </div>


                
            </section>

        </main>
    )
}

export default Info