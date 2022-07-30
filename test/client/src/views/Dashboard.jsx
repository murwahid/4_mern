import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetsTable from '../components/PetsTable';

function Dashboard() {

    const [pet, setPet] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    }, []);

    


    return (
        <div>
            <a href="/pet/new">Add a pet to the shelter</a>
            <h3>These pets are looking for a good home</h3>
           <PetsTable pet={pet}/>
        </div>
    )
}

export default Dashboard;