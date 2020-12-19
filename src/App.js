import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from "./pages/Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>

          <Router>
            <Switch>

              <Route exact path="/" component={Login} />
              
            </Switch>
          </Router>

      </React.Fragment>
    );
  }
}


export default App;