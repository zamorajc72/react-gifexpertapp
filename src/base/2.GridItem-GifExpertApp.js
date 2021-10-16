import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["Pelé", "Maradona", "Messi"];
  const [categories, setCategories] = useState(['Pelé']);

  //  const player = "Romario";

  //   const handleAdd = () => {
  //     //setCategories([...categories, player]);
  //     setCategories( categ => [...categories, player]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      <ol>
        {
            categories.map( category => (
                //return <li key={category}> {category} </li>;
                <GifGrid key={ category } category={ category } />
            ))
        }
      </ol>
    </>
  );
};
