import React from "react";
import { storiesOf } from "@storybook/react";
import NavigationButton from "./navigation-button.component";
import MUIprovider from "../../utils/mui-provider";

storiesOf("NavigationButton", module).add("Button", () => (
  <MUIprovider>
    <NavigationButton text="SnapTravel" buttonLabel="Learn More" />
  </MUIprovider>
));
