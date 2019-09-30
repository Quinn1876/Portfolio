import React from "react";
import { storiesOf } from "@storybook/react";
import FrontPageCTA from "./front-page-cta.component";
import MUIprovider from "../../utils/mui-provider";
import HTN from "../../static/Stock Programing Photo for htn.jpeg";

storiesOf("FrontPageCTA", module).add("with Title", () => (
  <MUIprovider>
    <FrontPageCTA title="Quinn Hodges" backdropImage={HTN} />
  </MUIprovider>
));
