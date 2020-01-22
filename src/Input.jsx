import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             f_name: '',
             l_name: '',
             age: ''
        }
    }

    handleForm1 = (e) => {
        this.setState({f_name: e.target.value})
    }

    handleForm2 = (e) => {
        this.setState({l_name: e.target.value})
    }

    handleForm3 = (e) => {
        this.setState({age: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onInput(`${this.state.f_name} ${this.state.l_name} ${this.state.age}`)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.f_name} onChange={this.handleForm1} placeholder="first name"/><br></br>
                <input type="text" value={this.state.l_name} onChange={this.handleForm2} placeholder="last name"/> <br></br>
                <input type="text" value={this.state.age} onChange={this.handleForm3} placeholder="age"/><br></br>
                <button>Submit</button>
            </form>
        )
    }
}

export default Input
