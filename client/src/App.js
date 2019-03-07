import React, { Component } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import fire from "./config/fire";

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
       <div className="App">{this.state.user ? <Home /> : <Login />}</div>
    )
  }
}

export default App;