import React, { useContext } from "react";
import CartContext from "./CartContext";

import classes from "./CartItems.module.css";
import Modal from "../UI/Modal";

const CartItem = (props) => {
  const { product, onAdd } = props;

  return (
    <div>
      <h2>{product.title}</h2>
      <div>{product.price}</div>
    </div>
  );
};

export default CartItem;
