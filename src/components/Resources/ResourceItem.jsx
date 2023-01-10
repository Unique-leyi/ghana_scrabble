

function ResourceItem(props) {
   
    return (
        <div className="lg:mx-6 flex justify-center bg-white shadow-lg shadow-sitepurple rounded-xl items-center flex-col my-10 overflow-hidden">
            <div className='rounded-t-md flex justify-center items-center flex-col bg-white w-full py-8'>
                <h3 className='font-semibold text-lg text-center'>{props.title}</h3>
                <a href={props.path} alt="alt text" target="_blank" rel="noopener noreferrer" className="bg-black text-white py-3 px-3 rounded-md hover:text-siteyellow font-semibold my-2">Download Material</a>
            </div>
        </div>
    )
}

export default ResourceItem