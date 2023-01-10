import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";



function Statement(props) {
    return (
        <div className="flex flex-wrap h-full bg-white border-l-4 border-solid border-siteyellow p-5 rounded-md shadow-md shadow-boldash">
            <div className="flex justify-between items-center ">
                <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: 60 }} className="text-sitegreen"/>
            </div>

            <div className="my-8">
                <h4 className="text-black text-3xl font-bold mx-10 flex justify-end items-end mb-3 border-b-4 border-solid border-siteyellow pb-2 text-justify flex-wrap">{props.title}</h4>
                <p className="text-sm text-darkash text-justify">{props.content}</p>
            </div>
        </div>
    )
}

export default Statement