import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

function Person() {
    const { id } = useParams();
    const [responseData, setResponseData] = useState({});
    useEffect(()=>{
  axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
      .then((response)=>{setResponseData(response.data);console.log(response)})
      .catch(err => console.log(err))
}, [id]); 
  return (
    <div>
        <h2>Person: {responseData.name}</h2>
        <h2>The Requested ID is {id} </h2>
        <div>
            <h4>Height:{responseData.height}</h4>
            <h4>Mass:{responseData.mass}</h4>
            <h4>Hair Color:{responseData.hair_color}</h4>
            <h4>Skin Color:{responseData.skin_color}</h4>
            <h4>Homeworld:{responseData.homeworld}</h4>
        </div>
    </div>
  )
}

export default Person;