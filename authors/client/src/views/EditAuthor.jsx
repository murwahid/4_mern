import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';


function EditAuthor() {

  const [author, setAuthor] = useState({})
  const [name,setName] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/author/${id}`)
      .then(res => setName(res.data.name))
      .catch(err => console.log(err))
  }, [id]);

  
  const onHandleSubmit = (e) => {
    e.preventDefault();
    history.push('/');
    console.log(e.target.value)
    axios.patch(`http://localhost:8000/api/edit/${id}`, {
        author,
        name
    })
    .then(res=>console.log("this is showing", res))
    .catch(err=>console.log("did not update", err))
}

  return (
    <div>
      <a href="/">Home </a>
      <h2>Edit this Author</h2>
      {/* COPY PASTE THE FORM HERE */}
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <button type="submit" className="btn btn-warning">Cancel</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default EditAuthor;