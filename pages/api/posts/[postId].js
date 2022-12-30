
//Gets Post With a particular id

const baseURL = process.env.NODE_ENV !== 'production' 
    ? "http://localhost:8000"
    : "https://api.ogunscrabbleassociation.com";

export default async function handler (req, res) {
    const { postId } = req.query;

    //fetch from backend
    try {
        const {Posts} = await fetch(baseURL);

        if(postId){
            const post = Posts.find(post => post.id == postId);
            return res.status(200).json(post);
        } 
        return res.status(404).json({ error: "Post Not Found" });

    } catch (error) {
        return "Unable to Fetch Posts";   
    }    

}