import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {
    //Hooks
    const [inputValue, setInputValue] = useState('');

    //Funciones
    const handleInputChange = (e) => { 
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            setCategories( categories => [ inputValue, ...categories ] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Type something..."
            />
        </form>
    );
}

//Props
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;