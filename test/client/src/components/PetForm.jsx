import React, { useState, useEffect, useParams } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function PetForm(props) {
    const [name, setName] = useState("");
    const [petType, setPetType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState([]);
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onHandleSubmit = (e) => {
        e.preventDefault();
        // history.push('/');
        console.log(e.target.value)
        setSkills(skill1,skill2,skill3)
        console.log({
            name,
            petType,
            description,
            skills: [skill1,skill2,skill3]
        });
        axios.post('http://localhost:8000/api/pet/new', {
            name,
            petType,
            description,
            skills: [skill1,skill2,skill3]
        })
            .then(res => console.log(res))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }
            )
    }

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Pet Type:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="petType"
                        onChange={(e) => setPetType(e.target.value)}
                    />

                    <label>Pet Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <h5>Skills (optional)</h5>
                    <label>Skill 1:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="skill_1"
                        onChange={(e)=>setSkill1(e.target.value)}
                    />
                    <label>Skill 2:</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e)=>setSkill2(e.target.value)}
                    />
                    <label>Skill 3:</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e)=>setSkill3(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Pet </button>
            </form>
        </div>
    )
}

export default PetForm;