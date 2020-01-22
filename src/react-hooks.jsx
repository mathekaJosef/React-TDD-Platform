import React, {useState} from 'react'

function SetHooks() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count {count}</button>
        </div>
    )
}

export default SetHooks



// import React, { Component } from 'react'

// export class App extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }

//         this.handleIncrement = this.handleIncrement.bind(this)
//     }

//     handleIncrement(){
//         this.setState(i => {
//             return {
//                 count: i.count + 1
//             }
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleIncrement}>{this.state.count}</button>
//             </div>
//         )
//     }
// }

// export default App
