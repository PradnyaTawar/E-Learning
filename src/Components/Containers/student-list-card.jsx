import React from "react";
import Profillogo from "../Assets/jsx_svg/profilelogo";
import ListLogo from "../Assets/jsx_svg/list-logo";
const Studentlistcard= ({name,surname})=>{
    return(
        <div className="student-list-card d-flex-ac  ">
        <span className="d-flex-ac "> <Profillogo color="#a055ff" /></span>
     
        <div className="just-center ">
          {" "}
         
          <div className="student-list-box color-primary h-16-semi ">
            <h2>{name}</h2>
            <h3> {surname}</h3>
            <h3> {name}</h3>
            <div className="students-list-btn d-flex-ac   ">
          <ListLogo color="#fefdff" />
          <h2 className="color-background h-16-bold"> <a className="color-pure"href="/viewstudent">View</a></h2>
        </div>
          </div>
          
        </div>
       
      </div>
    )
}
export default Studentlistcard;
