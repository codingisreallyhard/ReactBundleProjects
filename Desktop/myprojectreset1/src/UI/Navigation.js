import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartButton from "./CartButton";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <Fragment>
      <nav className={classes.topnav}>
        <Link to="/">
          <h1 className={classes.intro}>ReactMeals</h1>
        </Link>
        <Link to="/meals" className={classes.navlink}>
          Meals
        </Link>
        <Link to="/Favorites" className={classes.navlink}>
          Favorites
        </Link>
        <header className={classes.header}></header>
      </nav>
    </Fragment>
  );
};

export default Navigation;
