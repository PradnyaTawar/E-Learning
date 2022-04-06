import React from "react";
// import TeacherSidebar from './TeacherSidebar'
import Profillogo from "../Assets/jsx_svg/profilelogo";
import ListLogo from "../Assets/jsx_svg/list-logo";
import Titlecontainer from "../Containers/title-container.jsx";
import Studentlistcard from "../Containers/student-list-card.jsx";

const Studentslist = () => {
  return (
    <div>
      <Titlecontainer title="Students List" />
      <div className="student-list">
        
        <Studentlistcard />
      
      </div>
    </div>
  );
};

export default Studentslist;
