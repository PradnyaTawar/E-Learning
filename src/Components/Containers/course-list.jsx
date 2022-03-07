import React from "react";
import ListLogo from "../Assets/jsx_svg/list-logo";
import Profillogo from "../Assets/jsx_svg/profilelogo";

const Courselistcard = ({ name }) => {
  return (
    <div className="student-list-card just-center  ">
      <div className="just-center ">
        {" "}
        <div className="student-list-box color-primary h-16-semi ">
          <h2>Title</h2>
          <div className="line"></div>
          <span className="just-center ">
            {" "}
            <Profillogo color="#a055ff" />
          </span>
          <div className="student-list-inner-box"></div>
          <div className="create-list-btn d-flex-ac just-center  ">
            <ListLogo color="#fefdff" />
            <h2 className="color-background h-20-regular">
              <a className="color-pure" href="/coursedetails">
                View
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courselistcard;
