import React, { Component } from "react";
import Titlecontainer from "../Containers/title-container.jsx";
import axios from "axios";

export default class Viewstudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fullname: "",
      username: "",
      contact: "",
      password: "",
    };
  }

  getData = async (username) => {
    try {
      const data = await axios.get(
        `http://localhost:4000/get-profile/${username}`
      );
      console.log(data.data);
      this.setState({
        data: data.data,
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({
      fullname: "",
      username: "",
      contact: "",
      password: "",
    });
  };
  componentDidMount() {
    console.log();
    this.getData(window.location.search.split("?")[1]);
  }
  render() {
    return (
      <div>
        <Titlecontainer title="Student List" />
        <div className="signin  ">
          <div className="create-course ">
           
          <div className="input-div2">
              <label className="input-label h-20-bold  ">
               Full Name
              </label>
              <label className="input-label h-20-semi  ">
              {this.state.data.fullname}
              </label>
            </div>
            <div className="line2"></div>
            <div className="input-div2">
              <label className="input-label h-20-bold  ">
                User Name
              </label>
              <label className="input-label h-20-semi  ">
              {this.state.data.username}
              </label>
            </div>
            <div className="line2"></div>
            <div className="input-div2">
              <label className="input-label h-20-bold  ">
                {" "}
          Contact
              </label>
              <label className="input-label h-20-semi  ">
              {this.state.data.contact}
              </label>
            </div>
            <div className="line2"></div>
            <div className="input-div2">
              <label className="input-label h-20-bold  ">
                {" "}
             Password
              </label>
              <label className="input-label h-20-semi  ">
              {/* {this.state.data.password} */}
             ******** </label>
            </div>
            <div className="line2"></div>
          </div>
        </div>
      </div>
    );
  }
}
