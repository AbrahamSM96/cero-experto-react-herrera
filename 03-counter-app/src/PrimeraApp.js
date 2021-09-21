import React from "react";
import PropTypes from "prop-types";
//Functional Components
const PrimeraApp = ({ saludos, subtitulos = "Soy un subtitulo" }) => {
    // const saludo = "Hola perros";
    // const saludo2 = [1, 2, 3, 4, 5, 6];
    // const saludo3 = {
    //     name: "Abraham",
    //     edad: "25",
    // };

    return (
        <>
            {/* <h1>{saludo}</h1>
            <h1>{saludo2}</h1>
            <pre>{JSON.stringify(saludo3, null, 3)}</pre> */}
            <p>{saludos}!!</p>
            <p>{subtitulos}</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludos: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    subtitulos: "Soy un default subtitulo",
};

export default PrimeraApp;
