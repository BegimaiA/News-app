import React, {useState, useEffect} from 'react';
import axios from "axios"

const News = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios("https://6115f1038f38520017a3863c.mockapi.io/posts")
            .then(({data})=>setPosts(data))



    },[])

    return (
        <div>
            {
                posts.map(el=>
               <div>
                   <h4>{el.title}</h4>
                   <img src={el.img} alt=""/>
               </div>)
            }
        </div>
    );
};

export default News;