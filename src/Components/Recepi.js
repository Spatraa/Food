import React, { useState } from "react";
import RecepiDetails from "./RecepiDetails";

const Recepi = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image,  ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecepiDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recepi;