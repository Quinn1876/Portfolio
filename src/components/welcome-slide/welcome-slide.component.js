/*
The purpose of the FrontPageCTA is to get users engaed with the website.
The idea is to grab a viewers attention and get them 'hoocked' before
showing them a more focused/wordier page which talks about a project or
experience. I drew from concepts discussed in this article:
    https://www.quicksprout.com/how-to-design-a-homepage-that-converts/
while designing and implementing this component
*/

import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.darkBlue.main,
    display: "flex",
    height: "100vh",
    width: "100vw",
    alignItems: "center"
  },
  welcomeText: {
    textAlign: "center",
    color: "white",
    flex: 2
  },
  learnButton: {
    textAlign: "center",
    color: "white",
    flex: 1,
    backgroundColor: theme.palette.darkGrey.main,
    "&:hover": {
      backgroundColor: theme.palette.darkGrey.hover
    }
  },
  spacerW: {
    flex: 0,
    width: "33%"
  },
  textWrapper: {
    display: "flex",
    flex: "2",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const WelcomeSlide = props => {
  const { root, welcomeText, learnButton, spacerW, textWrapper } = useStyles();
  const { onLearnMore } = props;

  return (
    <div className={root}>
      <div className={spacerW} />
      <div className={textWrapper}>
        <Typography variant="h2" className={welcomeText}>
          Hello! My name is Quinn
        </Typography>
        <Typography variant="h3" className={welcomeText}>
          Welcome to my Portfolio
        </Typography>
        <Button className={learnButton} onClick={onLearnMore}>
          Learn More
        </Button>
      </div>
      <div className={spacerW} />
    </div>
  );
};

export default WelcomeSlide;
