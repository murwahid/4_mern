import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AuthorTable from '../components/AuthorTable';

function Main() {

  const [ author, setAuthor ] = useState([])
  useEffect(()=>{
      axios.get("http://localhost:8000/api/author")
          .then(res=>setAuthor(res.data))
          .catch(err=>console.log(err))
  }, []);

  const removeFromDom = authorId => {
    setAuthor(author.filter(author => author._id != authorId))
  }


  return (
    <div>
        <a href="/api/author">Add an Author</a>
        <h3>We have quotes by:</h3>
        <AuthorTable author={author} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Main;