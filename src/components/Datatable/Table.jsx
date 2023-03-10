import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react';
import Search from './Search';
import styles from "./table.module.css"
import TableHead from './TableHead';
import TablePaginate from './TablePaginate';
import { ratingData } from '../../../pages/api/ratingData';
import Link from 'next/link';



function Table() {

    const heading = [

        {title: "S/N"},
        {title: "Name"},
        {title: "Country"},
        {title: "Rating"},
        {title: "Total Games"},
        {title: "Last Played"},
    ]


    //Table Data
    const [players, setPlayers] = useState([]);

    //Search and Sorting through the table
    const [search, setSearch] = useState("");

    //Pagination
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsOffset, setItemsOffset] = useState({
        initialOffset: 0,
        totalOffset: 0,
    });


    //showButton
    const [showButton, setShowButton] = useState(false);
    const itemsPerPage = 10;

    //Get the data
    useEffect(() => {

        const getData = () => {
            setPlayers(ratingData);
        }

        getData();
    }, []);

    

    

    useEffect(() => {

        const handleButton = () => {
            if(location.pathname === "/ratings"){
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }

        handleButton();

    }, []);

    //Return New Set of Players
    const playerData = useMemo(() => {

        let computedPlayers = players;

        //Filter the table data based on user search.
        if(search){
            computedPlayers = computedPlayers.filter(
                player => 
                    player.name.toLowerCase().includes(search.toLowerCase()) ||
                    player.country.toLowerCase().includes(search.toLowerCase())
                )
        }
        
        
        setTotalItems(computedPlayers.length);
        setItemsOffset(prevData => {
            return {
                    ...prevData,
                initialOffset: (currentPage - 1) * itemsPerPage + 1, 
                totalOffset: (currentPage - 1) * itemsPerPage + itemsPerPage
            }
        });

        return computedPlayers.slice(
                (currentPage - 1) * itemsPerPage, 
                (currentPage - 1) * itemsPerPage + itemsPerPage
            );
    }, [players, currentPage, search]);

    

      const searchStyle = {
        container: "justify-end items-end",
        inputContainer: "",
        inputBox: "w-96 rounded-lg",
        placeholder: "Search for players",
    };




return (
        
<div className={`${styles.table_bg} w-full overflow-x-auto relative shadow-lg shadow-[rgba(0,0,0,0.5)] sm:rounded-lg`}>
    
    <Search 
        handleSearch={
            (value) => {
                setSearch(value);
                setCurrentPage(1);
            }

        }

         searchStyle={searchStyle}
        
        />

    {playerData.length > 0 ?

        <table className="w-full text-sm text-left">
            <TableHead heads={heading}/>
                <tbody className="bg-white">
                    
                    { playerData.map((player, i) => (
                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4 w-4">
                                {player.id}.
                            </td>
                            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                               
                                <div className="pl-3">
                                    <div className="text-[#000] font-semibold">{player.name}</div>
                                </div>  
                            </th>

                            <td className="py-4 px-6">
                                {player.country}
                            </td>

                            <td className="py-4 px-6">
                                {player.rating}
                            </td>

                            <td className="py-4 px-6">
                                {player.totalGames}
                            </td>

                            <td className="py-4 px-6">
                                {player.lastPlayed}
                            </td>
                        </tr>
                    ))
                    }
                    
                </tbody>
        </table>

    :
            <div className=" flex justify-center items-center w-full bg-white p-6">
                    <span className="w-full text-[#e24949] font-semibold text-center text-lg lg:text-xl">No Player Found!</span>
            </div>

    }

    {/* Pagination */}
    <nav className="flex justify-start lg:flex-row flex-col lg:justify-between items-start lg:items-center p-4 bg-siteblue shadow-md shadow-deep" aria-label="Table navigation">
        
        <span className="text-sm font-normal text-lightash">Showing <span className="font-semibold text-gray-900 dark:text-white">{itemsOffset.initialOffset} - {itemsOffset.totalOffset > totalItems ? totalItems : itemsOffset.totalOffset}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalItems}</span></span>


        {showButton ?  

                <TablePaginate
                    total={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={page => setCurrentPage(page)}
                />
            
            :

            <div className="lg:my-0 my-6">
                <div className='bg-siteyellow text-black py-2 px-6 rounded-lg flex justify-center items-center cursor-pointer font-bold hover:shadow-2xl hover:shadow-[rgba(255,255,255,0.2)]'>
                    <Link href={`/ratings`}>View More Ratings</Link>
                </div>
            </div> 

        }

    </nav>
</div>

    )
}

export default Table