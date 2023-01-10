
function Navigate(props){
    return (
        <a href="#" className="bg-white hover:bg-siteyellow border-2 border-solid border-deep transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-black inline"><i className={`ri-arrow-${props.side}-fill text-lg`}></i></a>
    )
}

export default Navigate