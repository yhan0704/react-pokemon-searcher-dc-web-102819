import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(props){
    super(props)
    this.state={
      pokemons:[],
      search:""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons:data,
        search: ""
      })
    })
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  addPokemon =(pokemonObj) =>{
    console.log("hi")
  }

  filteredPokemon = () =>{
    return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.onChange}  />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} filteredPokemon={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
