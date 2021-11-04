import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () => {
    //   setCategories(() => [...categories, 'Hulk'])
    // setCategories((cats) => [...cats, 'Hulk'])
    //  }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((cat) =>
                        <GifGrid key={cat} category={cat} />
                    )
                }
            </ol>
        </div>
    )
}

GifExpertApp.protoTypes = {
    setCategories: PropTypes.func.isRequired
}