import React from "react";
import { storiesOf } from "@storybook/react";
import MUIprovider from "../utils/mui-provider";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ palette }) => ({
  primary: {
    color: palette.primary.main
  },
  secondary: {
    color: palette.secondary.main
  },
  darkGreyHover: {
    color: palette.darkGrey.hover
  },
  darkGreyMain: {
    color: palette.darkGrey.main
  },
  lightBlue: {
    color: palette.lightBlue.main
  },
  darkBlue: {
    color: palette.darkBlue.main
  },
  beige: {
    color: palette.beige.main
  },
  primaryBackground: {
    backgroundColor: palette.primary.main,
    height: "32px"
  },
  secondaryBackground: {
    backgroundColor: palette.secondary.main,
    height: "32px"
  },
  darkGreyHoverBackground: {
    backgroundColor: palette.darkGrey.hover,
    height: "32px"
  },
  darkGreyMainBackground: {
    backgroundColor: palette.darkGrey.main,
    height: "32px"
  },
  lightBlueBackground: {
    backgroundColor: palette.lightBlue.main,
    height: "32px"
  },
  darkBlueBackground: {
    backgroundColor: palette.darkBlue.main,
    height: "32px"
  },
  beigeBackground: {
    backgroundColor: palette.beige.main,
    height: "32px"
  }
}));

const PalettePreview = () => {
  const {
    primary,
    secondary,
    darkGreyMain,
    darkGreyHover,
    lightBlue,
    darkBlue,
    beige,
    primaryBackground,
    secondaryBackground,
    darkGreyMainBackground,
    darkGreyHoverBackground,
    lightBlueBackground,
    darkBlueBackground,
    beigeBackground
  } = useStyles();
  return (
    <div>
      <div className={primary}>Primary - Main</div>
      <div className={secondary}>Secondary - Main</div>
      <div className={darkGreyMain}>darkGrey - Main</div>
      <div className={darkGreyHover}>darkGrey - Hover</div>
      <div className={lightBlue}>lightBlue - Main</div>
      <div className={darkBlue}>darkBlue - Main</div>
      <div className={beige}>beighe - Main</div>
      <div className={primaryBackground}></div>
      <div className={secondaryBackground}></div>
      <div className={darkGreyMainBackground}></div>
      <div className={darkGreyHoverBackground}>r</div>
      <div className={lightBlueBackground}></div>
      <div className={darkBlueBackground}></div>
      <div className={beigeBackground}></div>
    </div>
  );
};

storiesOf("Palette", module).add("palette", () => (
  <MUIprovider>
    <PalettePreview />
  </MUIprovider>
));
