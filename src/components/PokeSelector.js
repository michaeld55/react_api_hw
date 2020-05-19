import React from 'react';
import "./PokeSelector.css"

const PokeSelector = (props) => {

    const options = props.pokemons.map(pokemon => {
        return <option  value = {pokemon.url} key= {pokemon.name} >{pokemon.name}</option>
      })

      function handleChange(event) {
        props.onPokeSelected(event.target.value);
      }

    return(

        <select name="poke-selector" id="poke-selector" onChange={handleChange}>
        <option defaultValue="Choose a poke...">Choose a poke...</option>
        {options}
      </select>
    )
}

export default PokeSelector;