import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Spinner} from "react-bootstrap";

const Homepage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios("https://6115f1038f38520017a3863c.mockapi.io/posts")
            .then(({data}) => {
                setPosts(data)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <Spinner/>
    }

    return (
        <Layout>
          <Container>
              <h2 className="text-center mt-2">Most popular</h2>
              <OwlCarousel className='owl-theme mt-4' loop margin={10} dots={false} autoplay={true} items={3}>
                  {
                      posts.map(el =>
                          <Link to={`/news/${el.id}`} className="text-decoration-none">
                              <img src={el.img} width={340} height={350} className="rounded" alt=""/>
                              <h6 className="text-black my-3">{el.title}</h6>
                          </Link>
                      )
                  }
              </OwlCarousel>
          </Container>
        </Layout>
    );
};

export default Homepage;