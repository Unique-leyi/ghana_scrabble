import Image from "next/image"

function Error() {
    return (
        <div className="flex justify-center items-center flex-col py-14">
           <div className="w-full h-[32rem] relative my-4">
                <Image src={require('../../assets/images/wrong.png')} alt="error" fill style={{ objectFit: "cover" }}/>
            </div>

            <h4 className="text-xl font-bold mt-4">Something Went Wrong!</h4>
        </div>
    )
}

export default Error