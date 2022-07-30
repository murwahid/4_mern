import React from 'react'
import AuthorForm from '../components/AuthorForm';

function AddAuthor() {
   
  return (
    <div> 
        {/* CHANGE THE HREF */}
        <a href="/">Home </a>
        <h2>Add Author</h2>
        <AuthorForm/>
        
    </div>
  )
}

export default AddAuthor