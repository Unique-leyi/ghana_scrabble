import Link from 'next/link'
import styles from './News.module.css'
import Slider from 'react-slick'
import NewsItem from './NewsItem'
import fetcher from '../../../lib/fetcher'

function News() {
    const settings = {
        dots: false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed:3000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll:1,
    }

    const {data, isLoading, isError} = fetcher('/api/posts');

    //Stores the latest post
    let latest = [];
    
        if(data) {
            latest = data.filter(item => item.id < 5);
        }

   
    return (
        <section className={`bg-ash flex py-12 justify-center items-center flex-col`}>
            
            <div className="lg:my-8lg:w-[60%] lg:mx-auto mx-4 flex justify-center items-center flex-col">
                <h3 className='text-black text-5xl font-extrabold'>Latest Articles and Events</h3>
                <p className="my-2 leading-snug text-black text-center">Get the Latest Happenings and Updates on Events in Scrabble in Ghana Scrabble Association (SCAG). 
                </p>
            </div>

            <div className="w-full lg:max-w-[85%] lg:p-6 mx-4 md:mx-auto flex justify-around items-center md:flex-row flex-col">

                {/* News Slider Carousel */}
                    <div className="w-full my-10 lg:w-[85%]">
                        <Slider {...settings}>
                            {
                                latest.map((item, i) => (
                                    <NewsItem key={i} {...item}/>
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