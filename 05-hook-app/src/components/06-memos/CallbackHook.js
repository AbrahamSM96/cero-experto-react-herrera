import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export default function CallbackHook() {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((value) => {
    setCounter((counter) => counter + value);
  }, []);

  return (
    <div>
      <h1>useCallbackHook: {counter}</h1>
      <ShowIncrement increment={increment} />
    </div>
  );
}
