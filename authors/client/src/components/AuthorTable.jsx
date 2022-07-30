import React from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';

function AuthorTable (props) {

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
            <table className="table table-primary">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Author</th>
                    <th scope="col"> Action Available </th>
                </thead>
                <tbody>
                    {props.author.map((author,index)=>
                        <tr key={index}>
                            <td>{author._id}</td>
                            <td>{author.name}</td>
                            <td>
                            <div className="margin:1" >
                                <a className="btn btn-dark" href={`/api/edit/${author._id}`}>Edit</a>
                                <button className="btn btn-warning" onClick={() => onHandleClick(author._id)}>
                                    Delete </button>
                            </div>
                            </td>
                        </tr>
                       
                    )}
                </tbody>
            </table>
        </div>
    )
}

// function AuthorTable(props) {

//     return (
//         <div>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">Author</th>
//                         <th scope="col">Action Available</th>
//                     </tr>
//                 </thead>
//             </table>
//         </div>
//     )
// }
export default AuthorTable;