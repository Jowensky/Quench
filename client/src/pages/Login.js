import React, { Component } from "react";
import fire from "../config/fire";
import {
  Left,
  Right,
  Password,
  Email,
  Inside,
  Logo
} from "../components/Login";

class Login extends Component {
  state = {
    eml: "",
    password: "",
    invalidLogin: ""
  };

  signUp = event => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.eml, this.state.password)
      .catch(err => console.log(err));
  };

  loginUser = event => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.eml, this.state.password)
      .catch(err => {
        this.setState({ invalidLogin: "red" });
        console.log(err);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Left />
        <Right>
          <Logo color={{ color: this.state.invalidLogin }} />

          <Email
            value={this.state.eml}
            onChange={this.handleChange}
            name="eml"
          />
          <Password
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />

          <Inside loginUser={this.loginUser} signUp={this.signUp} />
        </Right>
      </div>
    );
  }
}

export default Login;
