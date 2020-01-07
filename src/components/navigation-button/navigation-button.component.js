import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({}) => ({
  navButton: {}
}));

const NavButton = ({ link, text, buttonLable }) => {
  const clickHandler = () => {};

  const { navButton } = useStyles();

  return (
    <div onClick={clickHandler}>
      <Typography>{text}</Typography>
    </div>
  );
};
