import React from 'react'

export default function GifGridItem({ title, url }) {
    return (
        <div className="card animate__animated animate__fadeInUp">
            <h2>{title}</h2>
            <img src={url} alt={title} />
        </div>
    )
}
