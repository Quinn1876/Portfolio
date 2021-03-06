import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  container: {
    backgroundColor: theme.palette.lightBlue.main,
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      width: "50vw",
      display: "flex",
      alignContent: "center",
      justifyContent: "center"
    },
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
      width: "100vw"
    }
  },
  photo: {
    marginTop: "-10vh",
    height: "100vh",
    borderRadius: "4px",
    alignSelf: "flex-start",
    transform: "scale(0.6)"
  },
  textContainer: {
    [theme.breakpoints.up("md")]: {
      marginTop: "10vh",
      height: "80vh",
      marginBottom: "10vh",
      marginLeft: "5vw",
      width: "35vw",
      marginRight: "10vw",
      display: "flex",
      alignContent: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      backgroundColor: theme.palette.darkBlue.main,
      color: theme.palette.white.main
      // backgroundColor: theme.palette.beige.main,
      // color: theme.palette.secondary.main
    }
  },
  header: {
    width: "max-content",
    paddingTop: theme.spacing(5),
    alignSelf: "center",
    fontFamily: "Permanent Marker"
  },
  aboutMeText: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(3),
    fontSize: "1.25em"
  }
}));

// TODO: Add Scroll Buttons and Redirect to About me page
const AboutMeSlide = props => {
  const {
    root,
    photo,
    container,
    textContainer,
    header,
    aboutMeText
  } = useStyles();
  return (
    <div className={root}>
      <div className={container}>
        {/* Add a proper headshot of me to this img */}
        <img
          src="https://raw.githubusercontent.com/Quinn1876/Portfolio/master/src/static/headshot.jpg"
          alt="Placeholder"
          className={photo}
        />
      </div>
      <div className={container}>
        <Paper className={textContainer}>
          <Typography className={header} variant="h4">
            About Me
          </Typography>
          {/* TODO: add Proper Info */}
          <Typography variant="body1" className={aboutMeText}>
            &emsp;Hi there! I'd like to tell you bit about myself. My name is
            Quinn and I am currently studying Computer Engineering at the
            University of Waterloo. As part of my studies at uWaterloo, I have
            had the opportunity to work on some incredible teams, HelloGbye and
            SnapTravel. While working with these teams, I have been able to
            contribute to some interesting products that are pushing the travel
            industry into a brand-new technological era. Moving forward, I’m
            excited to continue to work on innovative and cutting edge
            technologies.
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default AboutMeSlide;
