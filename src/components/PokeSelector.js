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
        <>
            <div className="custom-select">
                <h2>Choose A Pokémon To See More Detail</h2>
                <select name="poke-selector" id="poke-selector" onChange={handleChange}>
                    <option defaultValue="Choose a poke...">Choose a Pokémon</option>
                    {options}
                </select>
            </div>
      </>
    )
}

export default PokeSelector;