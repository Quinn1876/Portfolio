import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import MUIprovider from "./utils/mui-provider";
import Home from "./pages/home.page";
import Contact from "./pages/contact.page";
import Notfound from "./pages/notfound.page";

const App = () => {
  document.body.style.margin = 0;
  document.body.style.display = "inline";
  document.body.style.maxWidth = "100%";
  document.body.style.overflowX = "hidden";
  // document.body.style.overflow = "hidden";
  return (
    <MUIprovider>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect exact from="/" to="/home" />
          <Route path="/contact" component={Contact} />
          {/* <Route component={Notfound} /> */}
        </Switch>
      </Router>
    </MUIprovider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
