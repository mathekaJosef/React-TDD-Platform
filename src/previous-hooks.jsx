import React, {useState} from 'react'

function PreviousHooks() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            <p>Count {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default PreviousHooks
