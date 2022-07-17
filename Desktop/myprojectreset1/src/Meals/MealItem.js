import React, { Fragment } from "react";

import Card from "../UI/Card";
import classes from "./MealItem.module.css";

function MealItem(props) {
  const { product, onAdd } = props;

  return (
    <div>
      <h2>{product.title}</h2>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <div>
        <button onClick={onAdd}>Add to Cart</button>
      </div>
    </div>
  );
}

export default MealItem;