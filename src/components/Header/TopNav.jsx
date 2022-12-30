
function TopNav() {
    return (
        <section className="bg-lightblack py-1">

            <div className="lg:max-w-[85%] mx-auto lg:grid lg:grid-cols-2 justify-center items-center">
                <div className="flex justify-start items-center gap-8">
                    <div className='px-4 flex justify-center items-center gap-x-4 border-r-[1px] border-solid border-ash'>
                        <i class="ri-phone-fill text-siteyellow"></i>
                        <h4 className="text-white">+234 454 789 0435</h4>
                    </div> 
                    
                    <div className='p-2 flex justify-center items-center gap-x-4'>
                        <i class="ri-mail-fill text-siteyellow"></i>
                        <h4 className="text-white">info@scrabbleghana.com</h4>
                    </div> 
                </div>


                <div className='flex justify-end items-center gap-8'>
                    <a href="#" className="flex justify-center items-center flex-col">
                        <i class="ri-facebook-circle-fill text-white text-xl hover:text-siteyellow cursor-pointer"></i>
                    </a>

                    <a href="#" className="flex justify-center items-center flex-col">
                        <i class="ri-instagram-fill text-white text-xl hover:text-siteyellow cursor-pointer"></i>
                    </a>

                    <a href="#" className="flex justify-center items-center flex-col">
                        <i class="ri-twitter-fill text-white text-xl hover:text-siteyellow cursor-pointer"></i>
                    </a>
                </div> 

            </div>

        </section>
    )
}

export default TopNav