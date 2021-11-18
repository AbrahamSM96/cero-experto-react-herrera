import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'
export default function CounterWithCustomHook() {

    const {decrement, increment, state, reset} = useCounter(10)


    return (
        <div>
            <h1>Counter with hook: {state}</h1>
            <hr></hr>

            <button className="btn btn-warning" onClick={()=>increment(2)}>+1</button>
            <button className="btn btn-success" onClick={reset}>Reset</button>
            <button className="btn btn-danger" onClick={() => decrement(2)} >-1</button>
        </div>
    )
}
