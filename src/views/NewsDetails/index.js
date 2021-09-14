import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import axios from "axios";
import {Row, Col, Container, FormControl, FloatingLabel, Form, Button} from "react-bootstrap";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import NoMatch from "../../components/NoMatch";


const NewsDetails = () => {
    const [newsDetails, setNewsDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const params = useParams()
    useEffect(() => {
    axios(`https://6115f1038f38520017a3863c.mockapi.io/posts/${params.id}`)
        .then((res)=>{
            setNewsDetails(res.data)
        })
        .catch(()=>setNotFound(true))
        .finally(()=>setLoading(false))

    }, [])

    if (loading) {
        return <Spinner/>
    }
    if (notFound) {
        return <NoMatch/>
    }
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
             <h6 className="mt-3">Comments:</h6>
             <p className="fs-5">{newsDetails.commentAuthor}</p>
             <p>{newsDetails.comment}</p>
             <FloatingLabel controlId="floatingTextarea2" label="Comments">
                 <Form.Control
                     as="textarea"
                     placeholder="Leave a comment here"
                     style={{ height: '100px', width: "550px" }}
                 />
             </FloatingLabel>
             <Button variant="primary" type="submit" className="mt-3 mb-3">
                 Submit
             </Button>
         </Container>
     </Layout>
    );
};

export default NewsDetails;