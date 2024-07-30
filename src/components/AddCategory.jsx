import { useState } from 'react';



export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setinputValue] = useState('');
    
    const onInputChange = ({target})=> {
        setinputValue(target.value);
    };

    const onSubmit = (event) => {   
        event.preventDefault();

        if (inputValue.trim().length < 1) return;
        
        onNewCategory(inputValue.trim());
        // setCategories(categories => [...categories, inputValue]);
        setinputValue('');

    };


    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={onInputChange}
                // onChange={event => onInputChange(event)}
                />
        </form>
    );
};
