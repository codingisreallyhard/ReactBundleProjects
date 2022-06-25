import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Meals/store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const [btnIsHighighted, setBtnIsHighighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${btnIsHighighted ? classes.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
