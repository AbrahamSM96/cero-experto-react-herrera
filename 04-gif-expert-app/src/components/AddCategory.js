import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        console.log('handle input change llamado')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSubmit', inputValue)
        if (inputValue.trim().length > 2) {
            setCategories((cats) => [inputValue, ...cats])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </form>
    )
}


AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}