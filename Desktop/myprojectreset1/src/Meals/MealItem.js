import React, { Fragment } from "react";

import Card from "../UI/Card";

function MealItem(props) {
  const { product, onAdd } = props;

  return (
    <Card>
      <div>
        <h2>{product.title}</h2>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <div>
          <button onClick={onAdd}>Add to Cart</button>
        </div>
      </div>
    </Card>
  );
}

export default MealItem;
