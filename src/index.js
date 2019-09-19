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

const routing = (
  <MUIprovider>
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
  </MUIprovider>
);
ReactDOM.render(routing, document.getElementById("root"));
