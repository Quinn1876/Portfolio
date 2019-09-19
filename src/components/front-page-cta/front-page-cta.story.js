import React from "react";
import { storiesOf } from "@storybook/react";
import FrontPageCTA from "./front-page-cta.component";
import HTNimg from "../../assets/htn.jpg";
import MUIprovider from "../../utils/mui-provider";

storiesOf("FrontPageCTA", module).add("with Title", () => (
  <MUIprovider>
    <FrontPageCTA title="Quinn Hodges" backdropImage={HTNimg} />
  </MUIprovider>
));
