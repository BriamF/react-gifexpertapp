import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {
    //Hooks
    // const [images, setImages] = useState([])
    // Los hooks de efecto ejecutan código de manera condicional, en este caso el segundo argumento
    //  cuando esta vacío, solo se ejecutará una sola vez aunque se hagan cambios en el componente y se vuelva a renderizar.
    // useEffect( () => {
    //    getGifs( category )
    //         .then( gifs => setImages( gifs ) );
    // }, [ category ])

    //CustomHooks
    const { data:images, loading } = useFetchGifs( category );
    

    //Functions
    
    return (
        <>
            <h3> { category } </h3>
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className='card-grid'>
                { 
                    images.map( image => (
                        <GifGridItem 
                            key={ image.id } 
                            { ...image }
                        />
                    )) 
                }   
            </div>
        </>
    );
}

//Proptypes
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;