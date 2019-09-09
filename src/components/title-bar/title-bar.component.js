import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import IconSVG from "@mdi/react";
import { mdiLinkedinBox } from "@mdi/js";
import { mdiGithubCircle } from "@mdi/js";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    color: theme.palette.primary
  },
  title: {
    color: "white",
    flexGrow: 1
  },
  icon: {
    float: "right"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function TitleBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            {props.title}
          </Typography>
          <IconButton>
            <IconSVG
              className={classes.icon}
              color="white"
              path={mdiLinkedinBox}
              size={1}
            />
          </IconButton>
          <IconButton>
            <IconSVG
              className={classes.icon}
              color="white"
              path={mdiGithubCircle}
              size={1}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
