import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Puch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>Gif expert App</h1>
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      ></AddCategory>
      {categories.map((category) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}
    </>
  );
};
