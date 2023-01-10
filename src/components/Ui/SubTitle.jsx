
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faDownload } from "@fortawesome/free-solid-svg-icons";


function SubTitle(props){
    return (
        <>
        
          <div className="flex justify-start items-start rounded-t-md lg:p-0 px-5 flex-col border-b-2 border-solid border-black ">
            <div className="border-b-2 border-solid border-black rounded-t-lg p-4 mt-14 bg-siteyellow flex justify-around items-center gap-x-4">
                <FontAwesomeIcon icon={faDownload} style={{ fontSize: 20, display: 'block' }} className="text-black"/>
                <h5 className="text-[#000] font-semibold text-left text-sm tracking-widest uppercase">Download Resource</h5>
            </div>

            <div className="rounded-md my-4">
                <h3 className="text-darkblue text-left text-2xl lg:text-3xl font-bold ">{props.subtitle}</h3>
            </div>
        </div>
       

        
        </>
    )
}

export default SubTitle