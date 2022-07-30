import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

//

function Planet() {
    const { id } = useParams();
    const [responseData, setResponseData] = useState({});
      useEffect(()=>{
    axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
        .then((response)=>{setResponseData(response.data);console.log(response)})
        .catch(err => console.log(err))
}, [id]); 
  return (
    <div>
        <h2>Planet: {responseData.name}</h2>
        <h2>The Requested ID is {id} </h2>
        <div>
            <h4>Climate: {responseData.climate}</h4>
            <h4>Terrain: {responseData.terrain}</h4>
            <h4>Surface Water: {responseData.surface_water}</h4>
            <h4>Orbital Period: {responseData.orbital_period} days </h4>
        </div>
    </div>
  )
}

export default Planet;