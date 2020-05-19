import React from 'react';
import PokeSelector from '../components/PokeSelector';
import PokeDetail from "../components/PokeDetail"
import "./PokeContainer.css"

class PokeContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemons: [],
            selectedPokeURL: "",
            pokemon: ""
        }
        this.handlePokeSelected = this.handlePokeSelected.bind(this);
    }

    handlePokeSelected(url) {
        this.setState({ selectedPokeURL: url })
        fetch(url)
        .then(res => res.json())
        .then(pokemon => this.setState({pokemon: pokemon}))
      }

    componentDidMount(){
        const url = "http://pokeapi.co/api/v2/pokemon/?limit=151";

        fetch(url)
        .then(res => res.json())
        .then(pokemons => this.setState({ pokemons: pokemons.results }))
        .catch(err => console.error(err));
    }

    render(){
        return(
            <div className="poke-container">
            <PokeSelector pokemons = {this.state.pokemons} onPokeSelected = {this.handlePokeSelected}/>
            <PokeDetail pokemon = {this.state.pokemon}/>
            </div>
        )
    }

}

export default PokeContainer;