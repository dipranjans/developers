import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Developers from "./components/Developers";
import NewDeveloper from "./components/NewDeveloper";
import NoMatch from "./components/NoMatch";
import EditDeveloper from "./components/EditDeveloper";

const App = () => {
  return (
    <>
      <Router>
        <div className="container  app__container">
          <div className="row">
            <div className="col-6">
              <Link to="/">
                <h4>Featured Developers</h4>
              </Link>
            </div>
            <div className="col-6 text-right">
              <Link to="/add" className="btn btn-primary">
                + ADD NEW DEVELOPER
              </Link>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={Developers} />
            <Route exact path="/add" component={NewDeveloper} />
            <Route exact path="/edit/:id" component={EditDeveloper} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
