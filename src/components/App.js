import React from "react";
import {Link, Switch, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to React S!"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
