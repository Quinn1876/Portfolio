/*
The goal of the Title bar is to provide easy to use navigation options for the user.
The user should be able to navigate to any of the main pages from the title bar.
The user should be able to navigate to my linkedin/github page.
*/

import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/styles";

import IconSVG from "@mdi/react";
import { mdiLinkedinBox } from "@mdi/js";
import { mdiGithubCircle } from "@mdi/js";

import styles from "./title-bar.component.styles";

class TitleBar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  onClickLinkedIn() {
    window.open("https://www.linkedin.com/in/quinn-hodges-bb9a24168/");
  }

  onClickGitHub() {
    window.open("https://github.com/Quinn1876");
  }

  // TODO: Menu/Tab Event Handlers
  render() {
    const {
      classes: { root, appbar, title, icon, menuButton }
    } = this.props;

    return (
      <div className={root}>
        <AppBar className={appbar} position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={title} variant="h6">
              {this.props.title}
            </Typography>
            <IconButton className={icon} onClick={this.onClickLinkedIn}>
              <IconSVG
                className={icon}
                color="white"
                path={mdiLinkedinBox}
                size={1}
              />
            </IconButton>
            <IconButton className={icon} onClick={this.onClickGitHub}>
              <IconSVG
                className={icon}
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
}

export default withStyles(styles)(TitleBar);
