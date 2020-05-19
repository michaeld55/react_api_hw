import React from 'react';
import "./PokeDetail.css"

const PokeDetail = (props) => {
    if(!props.pokemon){
        return null;
    }
    return(
        <div className="poke-detail">
        <h1>Pokédex Number: {props.pokemon.id}</h1>
        <h1>Name: {props.pokemon.name}</h1>
        <h1>Height: {props.pokemon.height}0 cm</h1>
        <h1>Weight: {props.pokemon.weight}00 g</h1>
        <img src ={props.pokemon.sprites.back_default} alt="back sprite"/>
        <img src ={props.pokemon.sprites.front_default} alt="front sprite"/>

        </div>
    )
}

export default PokeDetail;