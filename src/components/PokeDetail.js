import React from 'react';

const PokeDetail = (props) => {
    if(!props.pokemon){
        return null;
    }
    return(
        <>
        <h1>Name: {props.pokemon.name}</h1>
        <h1>Height: {props.pokemon.height}</h1>
        <h1>Weight: {props.pokemon.weight}</h1>
        </>
    )
}

export default PokeDetail;