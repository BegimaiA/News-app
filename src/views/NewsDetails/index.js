import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import axios from "axios";
import {Row, Col, Container} from "react-bootstrap";
import Layout from "../../components/Layout";


const NewsDetails = () => {
    const [newsDetails, setNewsDetails] = useState({})
    const params = useParams()
    useEffect(() => {
    axios(`https://6115f1038f38520017a3863c.mockapi.io/posts/${params.id}`)
        .then((res)=>setNewsDetails(res.data))

    }, [])

    return (
     <Layout>
         <Container>
             <Row className="mt-5">
                 <Col md={6}>
                     <img src={newsDetails.img} width={500} height={400} className="rounded" alt=""/>
                 </Col>
                 <Col md={6}>
                     <h6>{newsDetails.title}</h6>
                     <p>{newsDetails.info}</p>
                     <p>Author: {newsDetails.author}</p>
                     <p>Date: {newsDetails.date}</p>
                 </Col>
             </Row>
         </Container>
     </Layout>
    );
};

export default NewsDetails;