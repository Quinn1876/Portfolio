import React from "react";
import { storiesOf } from "@storybook/react";
import TitleBar from "./title-bar.component";
import MUIprovider from "../../utils/mui-provider";

storiesOf("TitleBar", module).add("with Title", () => (
  <MUIprovider>
    <TitleBar title="Quinn Hodges" />
  </MUIprovider>
));
