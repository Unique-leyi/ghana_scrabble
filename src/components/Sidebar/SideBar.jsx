
import { useState, useEffect } from "react";
import { eventsData } from "../../../pages/api/events";
import NewsItem from "../News/NewsItem";
import ReactPaginate from 'react-paginate';
import Navigate from '../Ui/Navigate';
import Slider from 'react-slick';
import styles from "./sidebar.module.css";



function SideBar(props){
    
     const settings = {
        dots: false,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll:1,
        initialSlide: 0,
        arrows: true,
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


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(eventsData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(eventsData.length / itemsPerPage));

    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % eventsData.length;
        setItemOffset(newOffset);
  };

    return (
        <article className={`${styles.sidebar_bg} bg-center bg-cover bg-no-repeat gap-4 lg:gap-6 overflow-hidden grid grid-cols-1 lg:grid-cols-3 justify-center items-center z-[5] relative lg:p-0 p-4`}>
            <div className="col-span-1 flex justify-start items-start flex-col py-4 lg:px-3">
                <h3 className="text-siteyellow font-extrabold text-xl lg:text-3xl">Upcoming Events</h3>
                <p className="text-sm text-white text-center">Various Events Happening Across PANASA </p>
            </div>
            

            <div className="container mx-auto col-span-2 lg:w-[95%] grid grid-cols-1 justify-center items-center py-5">
                <Slider {...settings} className="grid gap-10">
                    {currentItems &&
                        currentItems.map((item, i) => (
                            <NewsItem key={i} {...item}/>
                        ))
                    
                    }
                </Slider>
                <div className="flex justify-end items-end flex-col flex-1">
                    
                    <ReactPaginate
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            renderOnZeroPageCount={null}
                            breakLabel="..."
                            previousLabel={<Navigate side={"left"}/>}
                            nextLabel={<Navigate side={"right"}/>}
                            previousClassName="flex justify-center items-center"
                            previousLinkClassName="flex justify-center items-center"
                            nextClassName="flex justify-center items-center"
                            nextLinkClassName="flex justify-center items-center"
                            containerClassName="flex justify-center items-center mt-10"
                            pageClassName="flex justify-center items-center"
                            pageLinkClassName="bg-white text-black font-semibold hover:bg-white  border-2 border-solid border-deep transition-all duration-150 py-1 px-2 mx-2 rounded-md text-center text-deep text-sm"
                            activeLinkClassName="!bg-siteyellow !text-black !font-bold"
                        />

                </div>
            </div>

        </article>
    )
}

export default SideBar