import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactCard(props){
    return (
        <div className="w-full flex justify-center items-center flex-col rounded-lg bg-[rgba(31,31,31,0.90)] border-2 border-solid border-white py-4 px-3 flex-wrap h-full">
            
            <div className='flex justify-center items-center my-2 flex-wrap'>
                <FontAwesomeIcon icon={props.contactIcon} style={{ fontSize: 25, color: 'black' }} className="p-4 rounded-full bg-siteyellow"/>
            </div>
            
            <div className="flex justify-center items-center my-3 flex-wrap">
                <p className='text-white mx-4 text-sm font-normal text-center'>{props.info}</p>
            </div>
        </div>
    )
}

export default ContactCard