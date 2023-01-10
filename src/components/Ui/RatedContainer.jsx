import { useState, useEffect } from "react";
import { ratingData } from "../../../pages/api/ratingData"
import Slider from "react-slick"
import Table from "../Datatable/Table"
import styles from "../Ratings/ratings.module.css"
import Link from "next/link"


function RatedContainer() {
    
    // slider
    const settings = {
        dots: false,
        autoplay: true,
        speed:1000,
        autoplaySpeed:5000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        initialSlide: 0,
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
                    arrows: true,
                }
            }
        ]
    }

    return (
        <main className="mt-16">
            <section className="lg:max-w-[80%] lg:mx-auto lg:p-0 p-4 flex justify-center items-center my-16 flex-col">
                <h3 className="text-center font-extrabold text-3xl lg:text-5xl text-deep my-2 uppercase">About The Ratings</h3>
                <p className="text-sm text-center my-2"> The SCAG Ratings Officer updates the ratings file using the latest results of approved tournaments. Ratings are given to those who have played in any SCAG rated tournament and have reached minimum of 30 games. </p>

            </section>


            <section className={`${styles.rated_bg} bg-cover bg-norepeat bg-fixed p-6 lg:py-20`}>
                <div className="my-8 lg:max-w-[80%] lg:mx-auto flex justify-center items-center flex-col lg:p-0 p-6">

                    <div className="w-full">
                            <h5 className="font-medium text-lg text-white">SCAG</h5>
                            <h3 className="text-siteyellow text-2xl lg:text-4xl font-bold">Player Ratings</h3>
                    </div> 

                </div>

                 <div className={`my-8 lg:max-w-[80%] lg:mx-auto flex justify-center items-center flex-col`}>
                    <Table/>
                </div>
            </section>
        </main>
    )
}

export default RatedContainer