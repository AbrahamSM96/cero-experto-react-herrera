import React, { useState } from "react";
import PropTypes from "prop-types";

export default function CounterApp({ value  }) {
    const [counter, setCounter] = useState(value);

    const handleClickPlus = (e) => {
        setCounter(counter + 1);
        // setCounter((prev) => prev + 1);
    };
    const handleClickSubstract = (e) => setCounter(counter - 1);

    const handleClickReset = (e) => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleClickPlus}>+1</button>
            <button onClick={handleClickReset}>Reset</button>
            <button onClick={handleClickSubstract}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
};

CounterApp.defaultProps = {
    value: 10,
};
