import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import axios from "axios";


const NewsDetails = () => {
    const [newsDetails, setNewsDetails] = useState({})
    const params = useParams()
    useEffect(() => {
    axios(`https://6115f1038f38520017a3863c.mockapi.io/:${params.id}`)

    }, [])

    return (
        <div>


        </div>
    );
};

export default NewsDetails;