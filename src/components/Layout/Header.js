import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/food.jpg";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MyMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of food!"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
