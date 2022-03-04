import React from "react";
import Titlecontainer from "../Containers/title-container.jsx";
import img2 from "../Assets/class1.jpg";
import { Link } from "react-router-dom";
import ProfileLogo from "../Assets/jsx_svg/profile-logo";
import Timer from "../Assets/jsx_svg/timer-logo";
import Arrow from "../Assets/jsx_svg/arrow-logo";
import Biggner from "../Assets/jsx_svg/biggner-logo";
import Homework from "../Assets/jsx_svg/homework-logo";
import Homeworkcontainer from "../Containers/homework-container.jsx";

const Studentcoursedetail = () => {
  return (
    <div>
      <Titlecontainer title="Course Details" />
      <div className="signin">
        <div className="sign-in-form">
          <div className="input-div">
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
          <span className=" d-flex-ac h-20-semi color-primary">
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
          <span className=" d-flex-ac h-20-semi color-primary ">
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
           Create Notes
          </span>
          <span className=" d-flex-ac h-20-semi color-primary">
            {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
            <Homework color="#a055ff" />
           Self Learning
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
            <div className="text-center h-20-regular">Course Link1</div>
          </div>
          <div className=" input-text-box-white">
            <div className="text-center h-20-regular">Course Link2</div>
          </div>
          <div className=" input-text-box-white">
            <div className="text-center h-20-regular">Course Link3</div>
          </div>
          <div className=" input-text-box-white">
            <div className="text-center h-20-regular">Course Link3</div>
          </div>{" "}
          <div className=" input-text-box-white">
            <div className="text-center h-20-regular">Course Link3</div>
          </div>{" "}
          <div className=" input-text-box-white">
            <div className="text-center h-20-regular">Course Link3</div>
          </div>
        </div>
      </div>
      <div className="homework">
        <label class="signin input-div h-30-semi color-primary  ">
          {" "}
          Homework Questions
        </label>
      </div>
      <Homeworkcontainer />
      <Homeworkcontainer />
      <div className="create-btn-div padding">
            <button
              type="button"
              className="secondary-btn  color-pure  h-20-semi "
            >
              <a className="color-pure" href="/studentlandingpage">
                End Your Course
              </a>
            </button>
          </div>
    </div>
  );
};

export default Studentcoursedetail;
