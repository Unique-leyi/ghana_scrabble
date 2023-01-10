import { useState } from "react";
import Link from 'next/link';
import MajorText from "../Ui/MajorText"
import ResourceList from '../Ui/ResourceList';


const RESOURCES = [


    {
        id: 1,
        title: "Resources For Player",
        resources: [
                {
                    title: 'WESPA Rules Version 4',
                    path: 'https://www.wespa.org/wesparulesv4.pdf',
                },

                {
                    title: 'PANASA Result Slip',
                    path: '/docs/result_slip.pdf',
                },

                {
                    title: 'Zyzzyva',
                    path: 'https://www.collinsdictionary.com/games/scrabble/tools',
                },

                {
                    title: 'Quackle',
                    path: 'http://people.csail.mit.edu/jasonkb/quackle/',
                },
        ],

    }
];

function Resource() {

    const [open, setOpen] = useState(1);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

   
    return (
        <section className={`bg-lightash w-full block lg:flex lg:justify-center items-center flex-col lg:py-16 px-6`}>
           
            <MajorText miniText={`Helpful Guides For Players `} majorText={`Resources`} smallTitle={`text-black`} title={`text-sitered`}/>


             <div className="lg:w-[85%] lg:mx-auto">
                {
                    RESOURCES.map((item, i) => (
                        <ResourceList key={i} {...item} accordionOpen={open} handleOpen={() => handleOpen(item.id)}/>
                    ))
                }
             </div> 

             <div className='py-4 lg:mt-4'>
                <div className='bg-black resource_btn hover:bg-siteyellow hover:text-black w-full lg:mx-auto text-white py-4 px-10 rounded-lg flex justify-center items-center cursor-pointer'>
                    <Link href={`/resources`}>View More Resources</Link>
                </div>
            </div>      

        </section>
    )
}

export default Resource