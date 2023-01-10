
function MajorText(props) {


    return (
        <div className="my-7 lg:p-0 p-4">
            <h5 className={`text-center text-[1rem] lg:text-lg my-2 ${props.title} font-semibold`}>{props.miniText}</h5>
            <h3 className={`text-4xl lg:text-5xl font-extrabold text-center ${props.smallTitle}`}>{props.majorText}</h3>
        </div>
    )
}

export default MajorText