import React, {useEffect,useState} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import axios from 'axios';


function DetailView() {
  const [pet,setPet] = useState({})
  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(res => setPet(res.data))
        .catch(err => console.log(err))
}, [id]);

const removeFromDom = petId => {
  setPet(pet.filter(pet => pet._id != petId))
}

const onHandleClick = (id) => {
  console.log(id);
  history.push('/')
  axios.delete('http://localhost:8000/api/delete/'+id)
  .then(res=> {
      removeFromDom(id)
  })
  .catch(err=>console.log(err));
}



  return (
    <div>
        <h2>Details About: {pet.name}</h2>
        <a href="/">Home </a>
        <button 
        className="btn btn-danger"
        onClick={()=>onHandleClick(pet._id)}
        >
          Adopt {pet.name}</button>
        <div>
            <h6>Pet Type:{pet.petType}</h6>
            <h6>Description:{pet.description}</h6>
            <h6>Skills:
              <p>{pet.skills && <div>{pet.skills[0] + pet.skills[1] + pet.skills[2]}</div>}</p>
            </h6>
        </div>
    </div>
  )
}

export default DetailView;