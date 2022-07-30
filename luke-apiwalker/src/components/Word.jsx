import React from 'react'
import {useParams} from 'react-router'; 


function Word() {
    const { word } = useParams();
  return (
    <div>
        Word
        <h1>The Word is { word } </h1>
    </div>
  )
}

export default Word