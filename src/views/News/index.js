import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import Layout from "../../components/Layout";
import {Container, Row, Col} from "react-bootstrap";

const News = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios("https://6115f1038f38520017a3863c.mockapi.io/posts")
            .then(({data})=>setPosts(data))
    },[])

    return (
        <Layout>
           <Container>
               <Row className="mt-5">
                   {
                       posts.map(el=>
                             <Col md={4}>
                                <Link to={`/news/${el.id}`} className="text-decoration-none">
                                    <img src={el.img} width={340} height={350} className="rounded"  alt=""/>
                                    <h6 className="text-black my-3">{el.title}</h6>
                                </Link>
                             </Col>
                       )
                   }

               </Row>
           </Container>
        </Layout>
    );
};

export default News;