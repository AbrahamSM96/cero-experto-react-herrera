import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

const heavyStuff = (iterationNumber = 100) => {
  for (let index = 0; index < iterationNumber; index++) {
    console.log('ahi vamos...')
  }
  return `${iterationNumber} iterations done`
}

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);

  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

   return (
    <div>
      <h2>
        Counter <small>{counter}</small>
      </h2>
      <hr></hr>

      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
