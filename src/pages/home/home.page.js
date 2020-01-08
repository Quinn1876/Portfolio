import React from "react";

import TitleBarComponent from "../../components/title-bar/title-bar.component";
// import WelcomeSlideComponent from "./welcome-slide.component";
import AboutMeSlideComponent from "./about-me-slide.component";

const Home = props => {
  const classes = props;
  return (
    <div className={classes.root}>
      <TitleBarComponent title="Quinn Hodges" />
      {/* <WelcomeSlideComponent
        onLearnMore={() =>
          window.scrollTo({
            left: 0,
            top: window.innerHeight,
            behavior: "smooth"
          })
        }
      /> */}
      <AboutMeSlideComponent />
    </div>
  );
};

export default Home;
