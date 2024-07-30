import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGif';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };
    // este hook sirve para que se de un efecto solo cuando el segundo argumento se da
    // si el [] se deja vacio es para que solo se active la primera vez que se renderice
    useEffect( () => {
        getImages();
    }, [ ]);
    return {
        images,
        isLoading
    };
};
