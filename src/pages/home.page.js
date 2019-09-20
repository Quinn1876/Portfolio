import React from "react";

import TitleBarComponent from "../components/title-bar/title-bar.component";
import FrontPageCTA from "../components/front-page-cta/front-page-cta.component";

import HTN from "../static/Stock Programing Photo for htn.png";

const Home = props => {
  const classes = props;
  return (
    <div className={classes.root}>
      <TitleBarComponent title="Quinn Hodges" />
      <FrontPageCTA title="QUINN" backdropImage={HTN} />
    </div>
  );
};

export default Home;
