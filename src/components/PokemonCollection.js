import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props.filteredPokemon)
    return (
      <Card.Group itemsPerRow={6}>        
        {/* <div>{this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}</div> */}
        <div>{this.props.filteredPokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}</div>
      </Card.Group>
    )
  }
}

export default PokemonCollection
