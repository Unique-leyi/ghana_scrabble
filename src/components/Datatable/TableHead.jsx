

function TableHead({heads}) {
    return (
       <thead className="text-xs text-gray-700 uppercase bg-black">
            <tr>
                {heads.map((head, i) => (
                    <th key={i} scope="col" className="py-7 px-3 text-white text-sm">
                        {head.title}
                    </th>
                ))}
            </tr>
        </thead> 
    )
}

export default TableHead