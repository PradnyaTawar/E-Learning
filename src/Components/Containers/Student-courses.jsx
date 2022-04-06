import React, { Component } from "react";
import ListLogo from "../Assets/jsx_svg/list-logo";
import Profillogo from "../Assets/jsx_svg/profilelogo";
import img2 from "../Assets/landing-page.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

export default class StudentCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      coursename: "",
    };
  }
  getData = async () => {
    try {
      const data = await axios.get(`http://localhost:4000/get-all-courses`);
      console.log(data.data);
      this.setState({
        data: data.data,
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({
      coursename: "",
    });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        {this.state.data.map((item) => (
          <div className="student-list-card just-center  ">
            <div className="just-center ">
              {" "}
              <div className="student-list-box color-primary h-16-semi ">
                <h2>{item.coursename}</h2>
                <div className="line"></div>
                <span className="just-center ">
                  {/* <Profillogo color="#a055ff" /> */}
                  <img
                    className="img"
                    alt="img"
                    height="130"
                    width="180"
                    src={img2}
                  />
                </span>
                <div className="student-list-inner-box"></div>
                <div className="create-list-btn d-flex-ac just-center  ">
                  <ListLogo color="#fefdff" />
                  <h2 className="color-background h-20-bold">
                    <Link
                      to={{
                        pathname: "/studentcoursedetails",
                        search: item.coursename,
                      }}
                    >
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
