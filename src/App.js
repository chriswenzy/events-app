import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
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
              
              
            </Switch>
          </Router>

      </React.Fragment>
    );
  }
}


export default App;