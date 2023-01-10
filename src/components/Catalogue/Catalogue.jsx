import { useState, useEffect } from 'react';
import Image from "next/image";
import Slider from 'react-slick';
import GalleryItem from '../Gallery/GalleryItem';
import { filteredData } from '../../../pages/api/data';
import styles from  "./catalogue.module.css";

function Catalogue() {

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
                    arrows: false,
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                }
            },

            {
                breakpoint: 300,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    }

    const [filter, setFilter] = useState("SCAG Trials");
    const [data, setData] = useState();
    // Modal
    const [slideNumber, setSlideNumber] = useState(0);
    const [galleryImages, setGalleryImages] = useState();
    const [openModal, setOpenModal] = useState(false);

    // Filtering the data

    useEffect(() => {

        if(filter == "Abuja"){
            const SelectedData = filteredData.filter(item => item.category === filter);
            setData(SelectedData);
            setGalleryImages(SelectedData[0].images);
        }

        if(filter == "Edo"){
            const SelectedData = filteredData.filter(item => item.category === filter);
            setData(SelectedData);
             setGalleryImages(SelectedData[0].images);
        }

        if(filter == "Ilorin"){
            const SelectedData = filteredData.filter(item => item.category === filter);
            setData(SelectedData);
            setGalleryImages(SelectedData[0].images);
        }

        if(filter == "SCAG Trials"){
            const SelectedData = filteredData.filter(item => item.category === filter);
            setData(SelectedData);
            setGalleryImages(SelectedData[0].images);
        }
       
        
    }, [filter]);
    

    const active = `!bg-sitered`;
    

     // Opens the Modal
    const handleOpenModal = (index) => {
        setSlideNumber(index);

        if(galleryImages != undefined || galleryImages.length > 0) {
            setOpenModal(true);
        }
    }

   
    // previous slide

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(galleryImages.length -1) : setSlideNumber(slideNumber - 1);
    }

    // next slide
    
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
    }
  

    return (
        <section>
            <div className="lg:max-w-[85%] lg:mx-auto my-10 lg:my-20 lg:p-0 p-4">
                <span className="text-sitered text-lg tracking-widest uppercase">Images</span>
                <h3 className="font-extrabold text-xl lg:text-4xl text-deep">Images Gallery</h3>
            </div>

            <div className={`${styles.gallery_gradient} w-full lg:max-w-[85%] lg:mx-auto rounded-md flex justify-center items-center flex-col lg:p-0 p-4`}>
                {
                    openModal ? 
                        <div className="w-full flex justify-center items-center flex-col lg:p-0 p-4">
                            <div className="w-full h-64 lg:w-[35%] lg:!h-[40rem] relative lg:mt-24 overflow-hidden border-8 border-solid border-white shadow-lg shadow-ash rounded-md">
                                <Image src={galleryImages[slideNumber].image} alt={`SCAG gallery`} className="modal-content" fill style={{ objectFit: "cover" }}/>
                            </div>

                            <div className="flex justify-center items-center flex-col mt-4">
                                <span className="text-white font-bold text-2xl my-3">{galleryImages[slideNumber].year}</span>
                            </div>
                        </div>
                    :


                    <>
                    { data?.map((item, i) => {
                        return (
                            <div key={i} className="w-full flex justify-center items-center flex-col lg:p-0 p-4">
                                <div className="w-full h-64 lg:w-[35%] lg:!h-[40rem] relative lg:mt-24 overflow-hidden border-8 border-solid border-white shadow-lg shadow-ash rounded-md">
                                    <Image src={item.images[0].image} alt={`SCAG gallery`} className="modal-content" fill style={{ objectFit: "cover" }}/>
                                </div>
            
                                <div className="flex justify-center items-center flex-col mt-4">
                                    <span className="text-white font-bold text-2xl my-3">{item.images[0].year}</span>
                                </div>

                            </div>

                            )
                        })
                    }
                    </>
                }

            </div>


            <div className="w-full lg:max-w-[85%] lg:p-6 lg:mx-auto flex justify-around items-center flex-col">

                {/* News Slider Carousel */}
                    <div className="w-full my-10 lg:w-[85%]">
                        <Slider {...settings}>
                            {
                                data?.map((item) => {
                                    return item.images.map((item, i) => (
                                        <GalleryItem key={i} {...item} handleView={() => handleOpenModal(i)}/>
                                    ))
                                })
                            }
                        </Slider>
                    </div>

                     <div className="w-full lg:w-[85%] lg:mx-auto bg-siteyellow lg:rounded-b-md flex justify-center lg:justify-around items-center lg:flex-row flex-col lg:p-6 lg:gap-x-16 gap-5 py-6">
                        <button className={`${filter === "SCAG Trials" ? active : " "}  my-1 gallery_btn`} onClick={() => setFilter("SCAG Trials")}>SCAG Trials</button>
                        <button className={`${filter === "Edo" ? active : " "}  my-1 gallery_btn`} onClick={() => setFilter("Edo")}>Edo</button>
                        <button className={`${filter === "Abuja" ? active : " "}  my-1 gallery_btn`} onClick={() => setFilter("Abuja")}>Abuja</button>
                        <button className={`${filter === "Ilorin" ? active : " "}  my-1 gallery_btn`} onClick={() => setFilter("Ilorin")}>Ilorin</button>
                    </div>

            </div>
        </section>
    )
}

export default Catalogue