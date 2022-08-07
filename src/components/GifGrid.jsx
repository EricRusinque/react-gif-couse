import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { data, isLoading } = useFetchGifs(category);

    console.log(data, isLoading)


    return (
        <>
            <h3>{ category }</h3>
            
            {   
             isLoading && (<h2> Cargando...</h2>)
            } 
            <div className="card-grid">
                {
                   data.map( (image)  => {
                            console.log(image)
                            return(
                            <GifItem 
                                key={image.id} 
                                {...image}
                            />)
                        })  
                
                }
            </div>
            
        </>
    )
}   
