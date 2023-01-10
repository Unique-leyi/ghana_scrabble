import { useState, useEffect } from 'react';
import Link from 'next/link';
import MajorText from '../Ui/MajorText';
import Slider from 'react-slick';
import { filteredData } from '../../../pages/api/data';
import GalleryItem from './GalleryItem';


function Gallery() {

    const settings = {
        dots: false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed:3000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },

            {
                breakpoint: 300,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const [filter, setFilter] = useState("SCAG Trials");
    const [data, setData] = useState();

    // Filtering the data

    useEffect(() => {

        if(filter == "Abuja"){
            const SelectedData = filteredData.filter(item => item.category === filter);
            setData(SelectedData);
        }

        if(filter == "Edo"){
            const SelectedData = filteredData.filter(item => item.category === filter);
            setData(SelectedData);
        }

        if(filter == "Ilorin"){
            const SelectedData = filteredData.filter(item => item.category === filter);
            setData(SelectedData);
        }

        if(filter == "SCAG Trials"){
            const SelectedData = filteredData.filter(item => item.category === filter);
            setData(SelectedData);
        }
    }, [filter]);
    

    const active = `!bg-sitered`;
   
    return (
        <section className={`w-full flex md:justify-center items-center flex-col mb-20 p-6 bg-[rgba(0,0,0,0.98)]`}>

            <MajorText miniText={`Our memorable moments`} majorText={`Gallery`} smallTitle={`text-siteyellow`} title={`text-white`}/>

            <div className="w-full lg:max-w-[85%] lg:p-6 mx-4 md:mx-auto flex justify-around items-center flex-col">

                {/* News Slider Carousel */}
                    <div className="w-full my-10 lg:w-[85%]">
                        <Slider {...settings}>
                            {
                                data?.map((item, i) => {
                                    return item.images.map((item, i) => (
                                        <GalleryItem key={i} {...item}/>
                                    ))
                                })
                            }
                        </Slider>
                    </div>

                    <div className="w-full lg:w-[85%] lg:mx-auto bg-siteyellow rounded-b-md flex justify-center lg:justify-around  items-center lg:flex-row flex-col lg:p-6 lg:gap-x-16 gap-5 py-6">
                        <button className={`${filter === "SCAG Trials" ? active : " "}  my-1 gallery_btn`} onClick={() => setFilter("SCAG Trials")}>SCAG Trials</button>
                        <button className={`${filter === "Edo" ? active : " "}  my-1 gallery_btn`} onClick={() => setFilter("Edo")}>Edo</button>
                        <button className={`${filter === "Abuja" ? active : " "}  my-1 gallery_btn`} onClick={() => setFilter("Abuja")}>Abuja</button>
                        <button className={`${filter === "Ilorin" ? active : " "}  my-1 gallery_btn`} onClick={() => setFilter("Ilorin")}>Ilorin</button>
                    </div>

            </div>

            <div className='my-8'>
                <div className='bg-siteyellow font-bold text-black hover:shadow-2xl hover:shadow-[rgba(255,255,255,0.2)] py-4 px-10 rounded-lg'>
                    <Link href={`/gallery`}>View More Images</Link>
                </div>
            </div>

        </section>
    )
}

export default Gallery