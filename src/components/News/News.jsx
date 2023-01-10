import Link from 'next/link'
import styles from './News.module.css'
import Slider from 'react-slick'
import Post from '../Blog/Post'
import fetcher from '../../../lib/fetcher'
import { NewsData } from '../../../pages/api/newsdata'

function News() {
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

    // const {data, isLoading, isError} = fetcher('api/posts');

    //Stores the latest post
    let latest = [];
    // latest = NewsData.filter((item,i) => item[i] < 5);
    latest = NewsData.slice(0,5);


   
    return (
        <section className={`bg-ash flex py-20 justify-center items-center flex-col`}>
            
            <div className="lg:my-8 lg:w-[60%] lg:mx-auto mx-4 flex justify-center items-center flex-col">
                <h3 className='text-black text-3xl lg:text-5xl font-extrabold text-center'>Latest Articles and Events</h3>
                <p className="my-2 leading-snug text-black text-center text-[1rem]">Get the Latest Happenings and Updates on Events in Scrabble in Ghana Scrabble Association (SCAG). 
                </p>
            </div>

            <div className="w-full lg:max-w-[85%] lg:p-6 mx-4 md:mx-auto flex justify-around items-center md:flex-row flex-col">

                {/* News Slider Carousel */}
                    <div className="w-full my-10 lg:w-[95%]">
                        <Slider {...settings} className="grid gap-10">
                            {
                                latest.map((item, i) => (
                                    <Post key={i} {...item}/>
                                ))
                            }
                        </Slider>
                    </div>

            </div>

            <div className='news_cta flex justify-center items-center flex-col'>
                <Link href={`/news`}>Read More News</Link>
            </div>


        </section>
    )
}

export default News