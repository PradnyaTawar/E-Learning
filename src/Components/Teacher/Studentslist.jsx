import React from "react";
// import TeacherSidebar from './TeacherSidebar'
import Profillogo from "../Assets/jsx_svg/profilelogo";
import ListLogo from "../Assets/jsx_svg/list-logo";
import Titlecontainer from "../Containers/title-container.jsx"
import Studentlistcard from "../Containers/student-list-card.jsx"

const Studentslist = () => {
  return (
    <div>
      <Titlecontainer title="Students List"/>
<div className="student-list">
      <div className="student-list-card d-flex-ac  ">
        <span className="d-flex-ac "> <Profillogo color="#a055ff" /></span>
     
        <div className="just-center ">
          {" "}
         
          <div className="student-list-box color-primary h-16-semi ">
            <h2>Name</h2>
            <h3> Name</h3>
            <div className="students-list-btn d-flex-ac   ">
          <ListLogo color="#fefdff" />
          <h2 className="color-background h-16-bold"><a className="color-pure"href="/viewstudent">View</a></h2>
        </div>
          </div>
          
        </div>
       
      </div>
     <Studentlistcard name="Pradnya "/>
     <Studentlistcard name="Pradnya "  />
     <Studentlistcard name="Pradnya "/>
     <Studentlistcard name="Pradnya "  />
     <Studentlistcard name="Pradnya "/>
     <Studentlistcard name="Pradnya "  />
     <Studentlistcard name="Pradnya "/>
     <Studentlistcard name="Pradnya "  />
     
      </div>
    </div>
  );
};

export default Studentslist;
