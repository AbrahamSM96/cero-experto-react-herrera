import React from 'react'
import PropTypes from "prop-types";

export default function GifGridItem({ title, url }) {
    return (
        <div className="card animate__animated animate__fadeInUp">
            <h2>{title}</h2>
            <img src={url} alt={title} />
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

GifGridItem.defaultProps = {
    title: 'Sooy el titulo',
    url: 'https://facebook.com'
}