import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

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
                        <li key={cat}>
                            {cat}
                        </li>
                    )
                }
            </ol>
        </div>
    )
}

GifExpertApp.protoTypes = {
    setCategories: PropTypes.func.isRequired
}