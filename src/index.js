import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Home from "./pages/home.page";
import Contact from "./pages/contact.page";
import Notfound from "./pages/notfound.page";
import theme from "./theme";

const routing = (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect exact from="/" to="/home" />
          <Route path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>
);
ReactDOM.render(routing, document.getElementById("root"));
