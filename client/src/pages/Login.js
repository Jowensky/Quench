import React, { Component } from "react";
import fire from "../config/fire";
import {
  Left,
  Right,
  Password,
  Email,
  Inside,
  Logo,
  Form
} from "../components/Login";

class Login extends Component {
  state = {
    eml: "",
    password: "",
    invalidLogin: ""
  };

  // Firebase SignUP
  signUp = event => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.eml, this.state.password)
      .catch(() => {
        this.setState({ invalidLogin: "red" });
      });
  };

  // Firebase Login
  loginUser = event => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.eml, this.state.password)
      .catch(() => {
        this.setState({ invalidLogin: "red" });
      });
  };

  handleChange = event => {

    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Left />
        <Right>
          <Logo color={{ color: this.state.invalidLogin }} />
          <Form>
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
          </Form>
          <Inside loginUser={this.loginUser} signUp={this.signUp} />
        </Right>
      </div>
    );
  }
}

export default Login;
