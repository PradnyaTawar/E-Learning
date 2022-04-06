import React, { Component } from "react";
import Profillogo from "../Assets/jsx_svg/profilelogo";
import ListLogo from "../Assets/jsx_svg/list-logo";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Studentlistcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username: "",
      contact: "",
    };
  }
  getData = async () => {
    try {
      const data = await axios.get(`http://localhost:4000/get-all-profile`);
      console.log(data.data);
      this.setState({
        data: data.data,
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({
      username: "",
      contact: "",
    });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        {this.state.data.map((item) => (
          <div className="student-list-card d-flex-ac  ">
            <span className="d-flex-ac ">
              {" "}
              <Profillogo color="#a055ff" />
            </span>

            <div className="just-center ">
              {" "}
              <div className="student-list-box color-primary h-16-semi ">
                {/* <h2>{item.id}</h2> */}
                <h2>{item.username}</h2>
                <h2>{item.contact}</h2>
                <div className="students-list-btn d-flex-ac   ">
                  <ListLogo color="#fefdff" />
                  <h2 className="color-background h-16-bold">
                    {" "}
                    {/* <a className="color-pure" href="/viewstudent">
                View
              </a> */}
                    <Link to={{ pathname: "/viewstudent", search: item.username }}>
                      {" "}
                      <h2 className="color-pure h-20-regular">View</h2>
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
