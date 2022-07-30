import React from 'react';
import axios from 'axios';

//    <button className="btn btn-warning" onClick={() => onHandleClick(pet._id)}> Delete </button>

function PetsTable (props) {

    const {removeFromDom} = props;

    const onHandleClick = (id) => {
        console.log(id);
        axios.delete('http://localhost:8000/api/delete/'+id)
        .then(res=> {
            removeFromDom(id)
        })
        .catch(err=>console.log(err));
    }

    return(
        <div> 
            <table className="table table-light">
                <thead>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col"> Actions </th>
                </thead>
                <tbody>
                    {props.pet.map((pet,index)=>
                        <tr key={index}>
                            <td>{pet.name}</td>
                            <td>{pet.petType}</td>
                            <td>
                            <div className="margin:1" >
                                <a className="btn btn-warning" href={`/pet/${pet._id}`}>Details</a>
                                <a className="btn btn-dark" href={`/edit/${pet._id}`}>Edit</a>
                            </div>
                            </td>
                        </tr>
                       
                    )}
                </tbody>
            </table>
        </div>
    )
}


export default PetsTable;