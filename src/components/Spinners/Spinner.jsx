

function Spinner() {
    return (
        <div className="flex justify-center items-center flex-col py-14">
            <span className="loader animate-spin"></span>
            <span className="text-xl font-bold mt-4 text-black">Loading...</span>
        </div>
    )
}

export default Spinner