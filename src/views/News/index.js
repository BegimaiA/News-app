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
               <Row>
                   {
                       posts.map(el=>
                             <Col md={4}>
                                <Link>
                                    <img src={el.img} rounded width={300} height={350}   alt=""/>
                                    <h6>{el.title}</h6>
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