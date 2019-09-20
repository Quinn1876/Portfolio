/*
The purpose of the FrontPageCTA is to get users engaed with the website.
The idea is to grab a viewers attention and get them 'hoocked' before
showing them a more focused/wordier page which talks about a project or
experience. I drew from concepts discussed in this article:
    https://www.quicksprout.com/how-to-design-a-homepage-that-converts/
while designing and implementing this page
*/

import React from "react";

import styles from "./front-page-cta.component.styles";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

class FrontPageCTA extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      backdropImage,
      classes: { container, backdrop },
      title,
      altText
    } = this.props;
    return (
      <div className={container}>
        <img className={backdrop} src={backdropImage} alt={altText} />
        {/* <Typography>{title}</Typography> */}
      </div>
    );
  }
}

export default withStyles(styles)(FrontPageCTA);
