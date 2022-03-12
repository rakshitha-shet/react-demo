import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function PostEffect() {
    const [post, setPost] = useState([])

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(result => {
            setPost(result.data)
        })
        .catch(error => {
            console.log('error ===>', error);
        })
    },[])
  return (
        <>
        POST EFFECT
        <ul>
            {post.map(p => (<li key={p.id}> {p.title}</li>))}
       </ul>
        </>
        
  )
}
