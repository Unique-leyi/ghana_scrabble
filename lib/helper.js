


const baseURL = "https://api.ogunscrabbleassociation.com/api/posts";

export default async function getPost(id){

    const res = await fetch(`${"https://api.ogunscrabbleassociation.com/api/posts"}`);
    const posts = await res.json();


    //get One post
    if(id){
        return posts.find(post => post.id == id);
    }

    return posts;
}



