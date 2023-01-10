import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Operation(props){
    return (
        <div className="flex justify-start items-start flex-col lg:p-0 p-4">
            <div className="flex-1 flex flex-col my-2">
                <FontAwesomeIcon icon={props.icon} className=" w-6 h-6 text-black bg-siteyellow rounded-full p-5 my-2" style={{ fontSize: "0.5rem" }}/>
                <h3 className="font-bold text-white text-xl">{props.title}</h3>
            </div>

            <div className="my-1 flex-1">
                <p className="text-justify text-sm text-white">{props.content}</p>
            </div>
        </div>
    )
}

export default Operation