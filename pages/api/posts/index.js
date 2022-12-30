// import newsdata from "../newsdata"

// // //Gets All Posts Data

// export default function handler(req, res){
//     const { Posts } = newsdata;

//     if(Posts) {
//         return res.status(200).json(Posts);
//     } else {
//         return res.status(404).json({error: "Data Not Found"});
//     }

// }
const baseURL = process.env.NODE_ENV !== 'production' 
    ? "http://localhost:8000/api/posts"
    : "https://api.ogunscrabbleassociation.com/api/posts";

export default async function handler(req, res) {
    
    try {
        const { Posts } = await fetch(baseURL);
        
        if(Posts){
            return res.status(200).json(Posts)
        } else {
            return res.status(404).json({error: "Posts Not Found"});
        }
    } catch (err) {
        return res.status(400).json(err);
    }
}