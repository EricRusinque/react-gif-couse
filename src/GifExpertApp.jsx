import { useState } from "react"
import { GifGrid, AddCategory } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {

      if( categories.includes(newCategory)) return;
      setCategories([ newCategory, ...categories])
      console.log(categories)
    }

    return (
      <>
          <h1>GiftExpertApps</h1>

          <AddCategory 
            // setCategories={ setCategories } 
           onNewCategory={ onAddCategory }
          />
          {
            categories.map( (category) => (
              <GifGrid 
                key={category} 
                category={category}
              />
            )) 
          }
      </>
    )
}
