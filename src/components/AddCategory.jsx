import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch')
    
    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory(inputValue.trim());
        setInputValue('')
    }
    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder='Search Gif'
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
