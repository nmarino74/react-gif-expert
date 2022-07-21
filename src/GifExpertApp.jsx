import {useState} from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories ]);
    //setCategories(cat => [...cat, 'Valorant']);
  }

  return (
    <>       
        <h1>GifExpertApp</h1>        
        
        <AddCategory 
          onNewCategory = {value => onAddCategory(value)}
        />

        {/* listado de gifs*/}
        {/* <button onClick={onAddCategory}>Agregar</button> */}

          {categories.map(category => {
            return (
              <GifGrid key={category} category={category}/>
                    // <div key={category}>
                    //   <h3>{category}</h3>
                    //   <li>{category}</li>
                    // </div>
                   )
          })}
    </>
  )
}
