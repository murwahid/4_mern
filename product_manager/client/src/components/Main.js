import React, { useEffect, useState } from 'react'
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import axios from 'axios';
import { useParams } from "react-router-dom";

    
const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const removeFromDom = (id) => {
        setProduct(product.filter(product => product._id != product._id));
    }

    return (
        <div>
          <ProductForm/>
           <hr/>
           {/* <ProductList product={product}/> */}
           {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;