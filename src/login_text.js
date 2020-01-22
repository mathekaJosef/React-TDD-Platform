import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
         loggedIn: true
       }
  }

  handleState = () => {
    this.setState(item => {
      return {
        loggedIn: !item.loggedIn
      }
    })
  }
  
  render() {

    let p_string = this.state.loggedIn ? "logged in" : "logged out";
    let btnChange = this.state.loggedIn ? "logout" : "login";

    return (
      <div>
        <button onClick={this.handleState}>{btnChange}</button>
        <p>{p_string}</p>
      </div>
    )
  }
}

export default App
