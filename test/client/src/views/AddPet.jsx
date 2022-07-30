import React from 'react'
import PetForm from '../components/PetForm';

function AddPet() {

    return (
        <div>
            {/* CHANGE THE HREF */}
            <a href="/">Home </a>
            <h2>Know a pet needing a home?</h2>
            <PetForm />
        </div>
    )
}

export default AddPet;