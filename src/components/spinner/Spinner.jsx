

function Spinner() {
    return (
        <div className="flex justify-center items-center flex-col py-14">
            <span className="loader"></span>
            <span className="text-xl font-bold mt-4">Loading...</span>
        </div>
    )
}

export default Spinner