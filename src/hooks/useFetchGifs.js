import { useEffect, useState } from 'react'
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState({
        data: [],
        isLoading: true,
    })
    
    
    const getImages = async() => {
        const newImages = await getGifs(category);
        
        setTimeout(() => {
            setImages({
            ...images,
            data: newImages,
            isLoading: false,
        });
        }, 3000);
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        images
    )
  
}
