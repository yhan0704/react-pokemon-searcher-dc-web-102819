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
      search:"",
      name: '', 
      hp: '', 
      front: '', 
      back: '' 
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

  onChangeName =(e) =>{
    this.setState({
      name: e.target.form.name.value, 
      hp: e.target.form.hp.value, 
      front: e.target.form.frontUrl.value, 
      back: e.target.form.backUrl.value
    })
  }

  addPokemon=(e)=>{
    e.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify({
        name:this.state.name,
        stats:[{
          value:this.state.hp,
          name:"hp"
        }],
        sprites:{
          front:this.state.front,
          back:this.state.back
        }
      })
    })
    .then(res => res.json())
    .then(newPokemon => {
      this.setState({
        pokemons:[...this.state.pokemons, newPokemon]
      })
    })

    e.target.reset()
  }

  filteredPokemon = () =>{
    return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onChangeName={this.onChangeName} addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.onChange}  />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} filteredPokemon={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
