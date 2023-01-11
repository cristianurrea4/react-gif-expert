import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    // setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input type="text" placeholder="Buscar gifs" onChange={onInputChange} />
    </form>
  );
};
