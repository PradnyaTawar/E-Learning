import React from "react";
import TeacherSidebar from "./TeacherSidebar";
import Titlecontainer from "../Containers/title-container.jsx";
import Courselistcard from "../Containers/course-list.jsx";

const Addedcourses = () => {
  return (
    <div>
      <Titlecontainer title="Added Courses" />
      <div className="student-list">
        <Courselistcard name="Pradnya" surname="Tawar" />
        <Courselistcard name="Pradnya" surname="Tawar" />{" "}
        <Courselistcard name="Pradnya" surname="Tawar" />{" "}
        <Courselistcard name="Pradnya" surname="Tawar" />
        <Courselistcard name="Pradnya"  surname="Tawar" />
        <Courselistcard name="Pradnya"  surname="Tawar" />
      </div>
    </div>
  );
};

export default Addedcourses;
