import React from "react";
import { Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  navButton: {
    border: `1px solid ${theme.palette.darkBlue.main}`,
    backgroundColor: theme.palette.darkBlue.main,
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    padding: "8px 16px",
    width: "max-content",
    alignItems: "center"
  },
  linkWrapper: {
    backgroundColor: theme.palette.darkGrey.main,
    width: "100px",
    padding: "4px 0px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "4px",
    border: `1px solid ${theme.palette.darkGrey.main}`,
    marginTop: "8px",
    color: theme.palette.white.main,
    "&:hover": {
      backgroundColor: theme.palette.darkGrey.hover,
      cursor: "pointer"
    }
  },
  textClass: {
    color: theme.palette.white.main
  }
}));

const NavButton = ({ link, text, buttonLabel }) => {
  const clickHandler = () => {};

  const { navButton, linkWrapper, textClass } = useStyles();

  return (
    <div onClick={clickHandler} className={navButton}>
      <Typography className={textClass} variant="h5">
        {text}
      </Typography>
      <Link className={linkWrapper} underline="none">
        {buttonLabel}
      </Link>
    </div>
  );
};

export default NavButton;
