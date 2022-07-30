import React, { useState } from 'react'
import axios from 'axios'; 

export default function ProductForm() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(""); 
    const [description, setDescription] = useState("");
    // const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", {
            title, 
            price,
            description
        })
        .then(res=>console.log("Response: ", res))
        .catch(err=>console.log("Error: "+ err))

    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                {/* <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={e => setDescription(e.target.value)} aria-describedby="emailHelp"/>
                </div> */}
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}
