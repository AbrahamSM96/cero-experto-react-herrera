import React from "react";
import PropTypes from "prop-types";

export default function CounterApp({ value }) {
    const handleClick = (e) => {
        console.log(e);
    };
    return (
        <>
            <h1>CounterApp</h1>
            <h1>{value}</h1>
            <button onClick={handleClick}>+1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
};

CounterApp.defaultProps = {
    value: "Soy un default",
};
