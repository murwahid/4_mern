import React, {useState, useEffect, useParams} from 'react';
import axios from 'axios';

function AuthorForm(props) {
    const [name,setName] = useState("");
    const [errors, setErrors] = useState([]); 

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        axios.post('http://localhost:8000/api/author', {
            name
        })
        .then(res=>console.log(res))
        .catch(err=>{
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
    
    

    // const [ author, setAuthor ] = useState([])
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api/author")
    //         .then(res=>setAuthor(res.data))
    //         .catch(err=>console.log(err))
    // }, []);


    return (
        <div>
            <form onSubmit = {onHandleSubmit}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className="form-group">
                    <label>Name:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    onChange = {(e)=>setName(e.target.value)}
                    value={name}
                    />
                </div>
                <button type="submit" className="btn btn-warning">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AuthorForm;