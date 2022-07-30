import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../css/styling.module.css'; 
const Example = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1198')
        .then(response=>{setPokemon(response.data.results)});
    
        // fetch('https://pokeapi.co/api/v2/pokemon')
        //     .then(response => response.json())
        //     .then(response => setPokemon(response.results))
    },[]);
    // ;

    // const gottaCatchEmAll = () => {
    //     console.log('GETTING INFO THE AXIO WAY!');
    //     axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
    //     .then(response => {
    //         console.log('response using axios -----> ', response);
    //         setPokemon(response.data.results);
    //     })
    //     .catch(err => console.log(err));
    // }
  
    return (
        <div>
            <button className={styles.btn}> Fetch Pokemon</button>
            {/* {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<div key={index}><span>{pokemon.data.name} {pokemon.data.url}</span></div>)
            })} */}
            {
                pokemon.map((pokemon,id)=>{
                    return(
                        <div key={id}><h3>{pokemon.name} <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`} alt="PokeImage"></img> {id+1}</h3></div>
                    )})
            }
        </div>
    );
}
export default Example;

