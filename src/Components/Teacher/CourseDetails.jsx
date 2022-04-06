import React, { useEffect, useState ,Component} from "react";
import TeacherSidebar from "./TeacherSidebar";
import Titlecontainer from "../Containers/title-container.jsx";
import img2 from "../Assets/class1.jpg";
import { Link } from "react-router-dom";
import ProfileLogo from "../Assets/jsx_svg/profile-logo";
import Timer from "../Assets/jsx_svg/timer-logo";
import Arrow from "../Assets/jsx_svg/arrow-logo";
import Biggner from "../Assets/jsx_svg/biggner-logo";
import Homework from "../Assets/jsx_svg/homework-logo";
import Askquestion from "../Containers/askquestion.jsx";
import axios from "axios";
import CreateLogo from "../Assets/jsx_svg/create-course";

export default class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      coursename: "",
      links: "",
      skills: "",
      thumbnail: "",
    };
  }
  getData = async (coursename) => {
    try {
      const data = await axios.get(
        `http://localhost:4000/get-courses/${coursename}`
      );
      console.log(data.data);
      this.setState({
        data: data.data,
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({
      coursename: "",
      links: "",
      skills: "",
      thumbnail: "",
    });
  };
  componentDidMount() {
    console.log();
    this.getData(window.location.search.split("?")[1]);
  }
  render() {
    return (
    <div>
      <Titlecontainer title="Course Details" />
      <div className="signin">
        {/* {console.log("User", user)} */}
        <div className="sign-in-form">
          <div className="input-div">
            <label class="input-label h-30-semi color-primary  ">
            {this.state.data.coursename}
            </label>
            <label class="input-label h-30-semi color-primary  ">
              {" "}
              About this course
            </label>
            <label class="input-label h-20-semi  ">
              Start our course free of charge to discover just some of the ways
              businesses can reach and connect with more customers online. Plus,
              learn how to improve your search engine performance (SEO), and use
              online advertising (S EM) to boost sales and awareness.
            </label>
          </div>
        </div>
        <div className="signin-img">
          <img className="img" alt="img" height="500" width="500" src={img2} />
        </div>
      </div>
      <div className="signin">
        <div className="signin-img">
          <label class="input-label h-30-semi color-primary  ">
            {" "}
            Course Details
          </label>{" "}
          <span className=" d-flex-ac h-20-semi color-primary">
            {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
            <ProfileLogo color="#a055ff" />
            Modules: 4
          </span>
          <span className=" d-flex-ac h-20-semi color-primary ">
            {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
            <Timer color="#a055ff" />
            Hours: 3
          </span>
          <span className=" d-flex-ac h-20-semi color-primary">
            {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
            <Biggner color="#a055ff" />
            Beginner
          </span>
        </div>
        <div className="signin-img">
          <label class="input-label h-30-semi color-primary  ">
            {" "}
            Course Feature
          </label>{" "}
          <span className=" d-flex-ac h-20-semi color-primary">
            {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
            <Arrow color="#a055ff" />
            Video tutorials
          </span>
          <span className=" d-flex-ac h-20-semi color-primary">
            {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
            <Arrow color="#a055ff" />
            Easy-to-implement tips
          </span>
          <span className=" d-flex-ac h-20-semi color-primary">
            {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
            <Arrow color="#a055ff" />
            End of topic assessments
          </span>
        </div>
        <div className="signin-img">
          <label class="input-label h-30-semi color-primary  ">
            {" "}
            Homework Details
          </label>{" "}
          <span className=" d-flex-ac h-20-semi color-primary">
            {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
            <Homework color="#a055ff" />
            Online Submission
          </span>
          <span className=" d-flex-ac h-20-semi color-primary">
            {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
            <Homework color="#a055ff" />
            Profile
          </span>
          <span className=" d-flex-ac h-20-semi color-primary">
            {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
            <Homework color="#a055ff" />
            Profile
          </span>
        </div>
      </div>
      <div className="skills">
        <label class="signin input-div h-30-semi color-primary  ">
          {" "}
          Skills You Will Gain
        </label>
        <div className=" skills-container d-flex  h-20-semi color-primary">
          <div className=" input-text-box-white">
            <div className="text-center h-20-regular">{this.state.data.skills}</div>
          </div>
          <div className=" input-text-box-white">
            <div className="text-center h-20-regular">{this.state.data.skills}</div>
          </div>
          <div className=" input-text-box-white">
            <div className="text-center h-20-regular">{this.state.data.skills}</div>
          </div>
        </div>
        <div className="skills-container d-flex-ac  h-20-semi color-primary">
          <div className=" input-text-box-white">
            <div className="text-center h-20-regular">{this.state.data.links}</div>
          </div>
          <div className=" input-text-box-white">
            <div className="text-center h-20-regular">{this.state.data.links}</div>
          </div>
         
        </div>
      </div>
      <Askquestion />
      <div className="create-btn-div padding">
        <button
          type="button"
          disabled
          className="secondary-btn  color-pure  h-20-semi "
        >
          <a className="color-pure" href="/coursedetails">
            Start Your Free Coures
          </a>
        </button>
      </div>
    </div>
  );
};

}