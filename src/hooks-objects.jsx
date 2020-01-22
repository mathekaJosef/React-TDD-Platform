import React, {useState} from 'react'

function Hooksobjects() {
    const [name, setName] = useState({
        firstname: '',
        lastname: ''
    })

    // const handleObjects = e => {
    //     const {name, value} = e.target
    //     stateName({[name]: value})
    // }
    
    return (
        <div>
            <input 
                type="text" 
                name="firstname" 
                value={name.firstname} 
                onChange={(e) => setName({...name, firstname:e.target.value})}
            />
            <input 
                type="text" 
                name="lastname" 
                value={name.lastname} 
                onChange={(e) => setName({...name, lastname:e.target.value})}
            />
            <h2>First name: {name.firstname}</h2>
            <h2>Last name: {name.lastname}</h2>
        </div>
    )
}

export default Hooksobjects
