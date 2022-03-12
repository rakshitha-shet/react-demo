import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function OnePost() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [ postId, setPostId] = useState(1)

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(result => {
            setPost(result.data)
        })
        .catch(error => {
            console.log('error ===>', error);
        })
    },[postId])
  return (
        <>
        Get Post
        <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
        <button onClick={()=>setPostId(id)}> fetch post </button>
        {post.title}
        </>
        
  )
}
