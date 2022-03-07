import React from "react";
import ListLogo from "../Assets/jsx_svg/list-logo";
import Profillogo from "../Assets/jsx_svg/profilelogo";
import img2 from "../Assets/landing-page.jpg";

const StudentCourses = ({ name }) => {
  return (
    <div className="student-list-card just-center  ">
      <div className="just-center ">
        {" "}
        <div className="student-list-box color-primary h-16-semi ">
          <h2>Title</h2>
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
              <a className="color-pure" href="/courseinfo">
                View
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentCourses;
