import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  // handleName=(e)=>{
  //   this.setState({
  //     name: e.target.name.value
  //   })
  // }

  // handleSubmit=()=>{
  //   fetch("http://localhost:3000/pokemon", {
  //     method:'POST',
  //     header:{
  //       "Content-Type":"application/json",
  //       "Accept": "application/json"
  //     },
  //     body:JSON.stringify({
  //       name: this.state.name
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => this.props.addPokemon(data))
  // }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
