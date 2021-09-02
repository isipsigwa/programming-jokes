import React, { useState } from 'react'

import './myStyle.css'

import FetchData from './FetchData'

const App = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const maxCount = 10

    const increment = () =>{
        if (maxCount == count){
            setCount(initialCount)
           
        } else {
            return setCount(count + 1) 
        }
        
    }

    return(
        <>
        <section className="section">
            <div className="container">
            <FetchData /><br></br>
            
            <div className="main-title display-1 d-flex justify-content-center mb-5">{count}</div>
            <div className="text-center mb-5">
            <button className="btn btn-info" onClick={increment}>Increment</button>
            </div>
            </div>
        </section>
        </>
    )
}

export default App