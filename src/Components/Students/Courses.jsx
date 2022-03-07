import React from "react";
import Titlecontainer from "../Containers/title-container.jsx";
import Courselistcard from "../Containers/course-list.jsx";
import ListLogo from "../Assets/jsx_svg/list-logo";
import Profillogo from "../Assets/jsx_svg/profilelogo";
import StudentCourses from "../Containers/Student-courses.jsx";

const Courses = () => {
  return (
    <div>
      <Titlecontainer title="Courses" />
      <div className="student-list">
        <StudentCourses />
        <StudentCourses /> <StudentCourses /> <StudentCourses />
      </div>
    </div>
  );
};

export default Courses;
