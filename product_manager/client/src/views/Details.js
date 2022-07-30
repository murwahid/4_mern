import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <p> Product Id: {id} </p>
            <p>Product Title: {product.title}</p>
            <p>Product Description: {product.description}</p>
            <p> Price $ {product.price} </p>
            <a href={`/api/${id}/edit`}>Edit</a>
        </div>
    )
}
    
export default Detail;

