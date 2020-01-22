import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName: "",
       lastName: "",
       age: 0,
       gender: "",
       destination: "",
       isVegan: false,
       isKosher: false,
       isLactoseFree: false
    }
  }

  handleChange = (event) => {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? 
      this.setState({
        [name]: checked
      })
      :

    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <div>
        <form>
          <input 
            name="firstName" 
            onChange={this.handleChange} 
            value={this.state.firstName} 
            placeholder="First Name" 
          /><br />
          <input 
            name="lastName" 
            onChange={this.handleChange} 
            value={this.state.lastName} 
            placeholder="Last Name" 
          /><br />
          <input 
            name="age" 
            onChange={this.handleChange} 
            value={this.state.age} 
            placeholder="Age" 
          /><br />

          <label>
            <input 
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            /> Male
            
            <input 
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            /> Female
          </label>

          <br />
          
          <select value={this.state.destination} name="destination" onChange={this.handleChange}>
            <option>Choose option</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="italy">Italy</option>
            <option value="france">France</option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan === true}
             /> vegan?
          </label>
          
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
             /> kosher?
          </label>
          
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
             /> LactoseFree?
          </label>
          
          <br />

          <button>Submit</button>
        </form>
        <hr />

        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions: <br/>
          Vegan: {this.state.isVegan ? "Yes" : "No"} <br/>
          kosher: {this.state.isKosher ? "Yes" : "No"}<br/>
          Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}
        </p>
      </div>
    )
  }
}

export default App
