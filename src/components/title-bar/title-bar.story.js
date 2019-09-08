import React from "react";
import { storiesOf } from "@storybook/react";
import TitleBar from "./title-bar.component";

storiesOf("TitleBar", module).add("with Title", () => (
  <TitleBar title="Quinn Hodges" />
));
