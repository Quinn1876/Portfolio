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
    backgroundColor: theme.palette.darkBlue.main,
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
    marginTop: "10vh",
    marginBottom: "10vh",
    marginLeft: "5vw",
    maxWidth: "80%",
    height: "auto",
    borderRadius: "4px"
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
      flexDirection: "column"
    }
  },
  header: {
    width: "max-content",
    paddingTop: "24px",
    alignSelf: "center"
  },
  aboutMeText: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  }
}));

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
        <img
          src="https://raw.githubusercontent.com/Quinn1876/Portfolio/master/src/static/htn.jpg"
          alt="Self"
          className={photo}
        />
      </div>
      <div className={container}>
        <Paper className={textContainer}>
          <Typography className={header} variant="h4">
            About Me:
          </Typography>
          <Typography variant="body1" className={aboutMeText}>
            There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain..." What is Lorem Ipsum? Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default AboutMeSlide;
