import { useState, useEffect } from "react";
import { NewsData } from "../../../pages/api/newsdata"
import Post from "./Post"
import Navigate from "../Ui/Navigate";
import ReactPaginate from "react-paginate";
import SideBar from "../Sidebar/SideBar";
import Events from "./Events";
import Link from "next/link";
import fetcher from '../../../lib/fetcher';
import Error from '../Spinners/Error';
import Spinner from '../Spinners/Spinner';







function Blog() {
    const {data, isLoading, isError} = fetcher('api/posts');

    //Alternate Between Blog and News
    const [showEvent, setShowEvent] =  useState(false);


    //Paginate between News
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(NewsData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(NewsData.length / itemsPerPage));

    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % NewsData.length;
        setItemOffset(newOffset);
  };


    
//   if(isLoading) return <Spinner/>
//   if(isError) return <Error/>


    return (
        <>
        { showEvent ?
            <section className={`bg-ash`}>
                <div className='flex justify-start items-start cursor-pointer w-full lg:w-[70%] lg:mx-auto'>
                    <button className="bg-black hover:bg-siteyellow text-white py-2 px-6 rounded-lg border-none outline-none" onClick={() => setShowEvent(false)}>Back</button>
                </div>
                <Events/> 

            </section> 
            
            : 
            
            <section className={`bg-ash`}>
                <div className="w-full lg:p-0 grid grid-cols-1 justify-center lg:justify-start items-center lg:items-start">
                    <div className="col-span-1">
                        <SideBar handleEvent={() => setShowEvent(true)}/>
                    </div>

                    <section className="my-14 col-span-2 lg:max-w-[85%] lg:mx-auto">
                        <div className="flex justify-center items-center flex-col py-4">
                            <h3 className="text-sitered font-extrabold text-3xl lg:text-5xl my-1">News</h3>
                            <p className="text-sm lg:text-lg text-black text-center">Top Stories Making Headline in SCAG</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-6  lg:gap-y-10 lg:p-0 p-4">
                            {
                                currentItems.map((item, i) => (
                                    <div className="w-full flex-1 flex-col" key={i}>
                                        <Post {...item}/>
                                    </div>
                                ))
                            }

                            <div className="lg:max-w-[70%] lg:!mx-auto flex justify-end items-end flex-col">

                                <ReactPaginate
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    renderOnZeroPageCount={null}
                                    breakLabel="..."
                                    previousLabel={<Navigate side={"left"}/>}
                                    nextLabel={<Navigate side={"right"}/>}
                                    previousClassName="flex justify-center items-center "
                                    previousLinkClassName="flex justify-center items-center"
                                    nextClassName="flex justify-center items-center !text-black"
                                    nextLinkClassName="flex justify-center items-center !text-black"
                                    containerClassName="!flex !justify-center !items-end"
                                    pageClassName="flex justify-center items-center"
                                    pageLinkClassName="bg-transparent hover:bg-deep hover:text-ash border-2 border-solid border-white transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-white text-lg"
                                    activeLinkClassName="bg-siteyellow border-2 !border-black !text-black !font-bold"
                                />
                        </div>

                        </div>

                    </section>




                </div>

                
            </section>
            
            }
        </>
    )
}

export default Blog