import React from "react";
import TeacherSidebar from "./TeacherSidebar";
import Titlecontainer from "../Containers/title-container.jsx";

const Createcourse = () => {
  return (
    <div>
      {/* <TeacherSidebar/> */}
      <Titlecontainer title="Create Course" />
      <div className="signin ">
        <div className="create-course ">
          <div className="input-div2 ">
            <label class="input-label2 h-20-semi  "> Name</label>
            <input
              type="text"
              className="input-text-box2 color-primary h-20-bold "
            ></input>
          </div>
          <div className="input-div2">
            <label class="input-label2 h-20-semi  "> Links</label>
            <input
              type="text"
              className="input-text-box2 color-primary h-20-bold "
            ></input>
          </div>{" "}
          <div className="input-div2">
            <label class="input-label2 h-20-semi  "> Skills</label>
            <input
              type="text"
              className="input-text-box2 color-primary h-20-bold "
            ></input>
          </div>
          <div className="input-div2">
            <label class="input-label2 h-20-semi  "> Thumbnail </label>
            <input
              type="text"
              className="input-text-box2  color-primary h-20-bold"
            ></input>
          </div>
        </div>
      </div>
      <div className="create-btn-div">
        <button
          type="button"
          className="secondary-btn  color-pure   h-20-semi "
        >
          Create Course
        </button>
      </div>
    </div>
  );
};

export default Createcourse;
