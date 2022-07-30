import React from 'react'; 
import { useParams } from 'react-router';

function Number() {
    const { number } = useParams();
  return (
    <div>Number
        <h1>This is the number: {number} </h1>
    </div>
    
  )
}

export default Number;