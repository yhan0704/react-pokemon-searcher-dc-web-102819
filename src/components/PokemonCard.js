import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props){
    super(props)
    this.state={
      image : this.props.pokemon.sprites.front
    }
  }

  onChangeImage =(e) =>{
    let value = this.state.image === this.props.pokemon.sprites.front ? 
    this.props.pokemon.sprites.back : 
    this.props.pokemon.sprites.front

    this.setState({
        image : value
      })
  }

  render() {
    let hp = this.props.pokemon.stats.find(x => x.name === "hp").value
    
    return (
      <Card>
        <div>
          <div className="image" onClick={this.onChangeImage}>
            <img alt="oh no!" src={this.state.image}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />{hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
