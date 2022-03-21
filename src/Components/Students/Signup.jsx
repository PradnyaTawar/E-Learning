import React, { Component } from "react";
import img2 from "../Assets/landing-page.jpg";
import Navbar from "../Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      contact: "",
      password: "",
      confirmPassword: "",
    };
  }
  onSubmit = async () => {
    const result = await axios.post(`http://localhost:4000/signup`, {
      fullname: this.state.fullname,
      username: this.state.username,
      contact: this.state.contact,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    });
    console.log(result);
    if (result.status === 200) {
      alert("register done You can Login now");
 
  }else{
    alert("failed")
}
    this.setState({
      fullname: "",
      username: "",
      contact: "",
      password: "",
      confirmPassword: "",
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="heading h-36-semi color-primary ">Student Sign up</div>
        <div className="signin">
          <div className="signin-img">
            <img className="img" alt="img" height="400" src={img2} />
          </div>
          <div className="sign-in-form">
            <div className="input-div">
              <label className="input-label h-20-semi  "> Full Name</label>
              <input
                type="text"
                className="input-text-box color-primary h-20-bold "
                value={this.state.fullname}
                onChange={(e) => this.setState({ fullname: e.target.value })}
              ></input>
            </div>
            <div className="input-div">
              <label className="input-label h-20-semi  "> Username</label>
              <input
                type="text"
                className="input-text-box  color-primary h-20-bold"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              ></input>
            </div>
            <div className="input-div">
              <label className="input-label h-20-semi  ">Contact</label>
              <input
                type="text"
                className="input-text-box  color-primary h-20-bold"
                value={this.state.contact}
                onChange={(e) => this.setState({ contact: e.target.value })}
              ></input>
            </div>
            <div className="input-div">
              <label className="input-label h-20-semi  "> Password</label>
              <input
                type="text"
                className="input-text-box  color-primary h-20-bold"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              ></input>
            </div>
            <div className="input-div">
              <label className="input-label h-20-semi  ">
                Confirm Password
              </label>
              <input
                type="text"
                className="input-text-box  color-primary h-20-bold"
                value={this.state.confirmPassword}
                onChange={(e) =>
                  this.setState({ confirmPassword: e.target.value })
                }
              ></input>
            </div>
            <div className="signin-btn-div">
              <button
                type="button"
                className="secondary-btn  color-pure   h-20-semi "
                onClick={this.onSubmit}
              >
                Sign up
              </button>
              {/* <a className="color-pure"  href="/studentlandingpage ">
               
              </a> */}
            </div>
            <div className="heading h-20-semi color-primary ">
              {" "}
              Already User, Lets <a href="/signin">Sign In</a> !
            </div>
          </div>
        </div>
      </div>
    );
  }
}
