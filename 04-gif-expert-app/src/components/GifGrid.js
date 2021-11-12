import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export default function GifGrid({ category }) {
    const { data = [], loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInUp">{category}</h3>

            <div className="cardGrid">
                {loading ? (
                    <h1 className="animate__animated animate__flash">Loading</h1>
                ) : (
                    data.map((item) => <GifGridItem key={`${item.id}`} {...item} />)
                )}
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
