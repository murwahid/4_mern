import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import styles from '../css/styling.module.css';

const person = {
  firstName:"bob", 
  lastName:"Marley"
}



function SearchForm(props) {
  const [responseData, setResponseData] = useState(null);
  const [select, setSelect] = useState();
  const [id, setId] = useState();
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(select);
    console.log(id);
    history.push(`/${select}/${id}`);
  }

  const handleChange = (e) => {
     setSelect(e.target.value)
  }

  const handleIdChange = (e) => {
    setId(e.target.value);
  }
  return (
    <div> SearchForm
      <form onSubmit={ (e) => handleSubmit }>
      <select onChange = {handleChange}>
        <option value="films">films</option>
        <option value="people">people</option>
        <option value="planets">planets</option>
        <option value="species">species</option>
        <option value="starships">starships</option>
        <option value="vehicles">vehicles</option>
      </select>
      {/* FORM: ID  */}
      <div>
        <label>ID:</label>
        <input type="text" onChange = {handleIdChange}/>
      </div>
      <button className={styles.btn}>Search</button>
      </form>
    </div>

  )
}

export default SearchForm;