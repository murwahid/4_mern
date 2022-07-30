import React from 'react';
import axios from 'axios';

const ProductList = (props) => {
    const { removeFromDom } = props;


    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product' + id)
        .then(res => {
            removeFromDom(id)
        })
        .catch(err=> console.log(err));
    }


    return (
        <div>
            {props.product.map((product, i) =>
                <div>
                    <p key={i}>
                        <a href={`/api/product/${product._id}`}>{product.title}</a>
                        {product.description} {product.price}</p>
                    <button onClick={(e)=>deleteProduct(product._id)}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProductList;