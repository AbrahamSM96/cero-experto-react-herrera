import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../05-useLayoutEffect/layout.css";

export const LayoutEffect = () => {
  const pTag = useRef();
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];
  const [boxSize, setBoxSize] = useState({});
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr></hr>

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente Quote
      </button>
    </div>
  );
};
