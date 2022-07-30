import React, {useEffect, useState} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios';

function EditPetView() {
  // const [pet,setPet] = useState({})
  const [name, setName] = useState("");
  const [petType,setPetType] = useState("");
  const [description,setDescription] = useState("");

  const [skills,setSkills] = useState("");
  const [skill1,setSkill1] = useState("");
  const [skill2,setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");

  const [errors, setErrors] = useState([]);

  const { id } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(res => {
          setName(res.data.name)
          setPetType(res.data.petType)
          setDescription(res.data.description)
          setSkills(res.data.skills)
          setSkill1(res.data.skills[0])
          setSkill2(res.data.skills[1])
          setSkill3(res.data.skills[2])
        })
        .catch(err => console.log(err))
}, [id]);


  const onHandleSubmit = (e) => {
    e.preventDefault();
    history.push('/');
    console.log(e.target.value)
    console.log(`Here are the skills: ${skills}`)
    axios.patch(`http://localhost:8000/api/edit/${id}`, {
        name, 
        petType,
        description,
        skills:[skill1,skill2,skill3]
    })
    .then(res=>console.log("this is showing", res))
    .catch(err=>console.log("did not update", err))
}



  return (
    <div>
        <h2>Edit: Pet Name</h2>
        <a href="/">Home </a>

        <form onSubmit={onHandleSubmit}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <label>Pet Type:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="petType"
                        onChange={(e) => setPetType(e.target.value)}
                        value={petType}
                    />

                    <label>Pet Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        onChange={(e)=> setDescription(e.target.value)}
                        value={description}
                    />
                    <h5>Skills (optional)</h5>
                    <label>Skill 1:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="skill_1"
                        onChange={(e)=>setSkill1(e.target.value)}
                        value={skill1}
                    />
                    <label>Skill 2:</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e)=>setSkill2(e.target.value)}
                        value={skill2}
                        // onChange={onHandleSkills}
                    />
                    <label>Skill 3:</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e)=>setSkill3(e.target.value)}
                        value={skill3}
                        // onChange={onHandleSkills}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Edit Pet </button>
            </form>


    </div>
  )
}

export default EditPetView;