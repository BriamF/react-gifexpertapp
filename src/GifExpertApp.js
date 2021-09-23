import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp = () => {
    // Esto no funciona para poder agregar nuevas categorías, por ello es necesario usar Hooks.
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setCategories] = useState(['Pokemon'])
    // Referencia, fines educativos
    // const handleAdd = () => {
    //     // Formas de agregar un nuevo elemento a un arreglo en un Hook de estado. 
    //     setCategories( [...categories, 'NuevaCategoria'] );
    //     //setCategories( categories => [ ...categories, 'NuevaCategoria' ] );
    // }
    return (
         <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                { 
                    categories.map( category => (
                        //<li key={ category }> { category } </li>
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
