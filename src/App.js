import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css'
import { Create_event } from "./pages/Create_event";
import { Live_event } from "./pages/Live_event";
import { Login } from "./pages/Login";
import { Programs } from "./pages/Programs";

class App extends Component {
  render() {
    return (
      <React.Fragment>

          <Router>
            <Switch>

              <Route exact path="/" component={Login} />
              <Route exact path="/events" component={Programs} />
              <Route exact path="/create-event" component={Create_event} />
              <Route exact path="/live" component={Live_event} />
            </Switch>
          </Router>

      </React.Fragment>
    );
  }
}


export default App;