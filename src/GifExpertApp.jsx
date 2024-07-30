import { useState } from "react";
// cuando se tiene un index, se puede apuntar unicamente a la carpeta que el index se encarga de lo demas
import { AddCategory, GifGrid } from "./components";




export const GifExpertApp = () => {
    // no poner hooks dentro de condiciones
    const [categories, setCategories] = useState([ 'Pokemon' ]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;


        setCategories([...categories, newCategory]);
        // setCategories(cat => [...cat,newCategory]);

    };
    
    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={(value)=>onAddCategory(value)}/>

        {
            categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category}
                />)
            )   
        }
    </>
  );
};
