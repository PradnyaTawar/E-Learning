import React, { useEffect, useState } from "react";
import TeacherSidebar from "./TeacherSidebar";
import Titlecontainer from "../Containers/title-container.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Createcourse = () => {
  
  const [course, setCourse] = useState({
    coursename: "",
    links: "" ,
    skills: "" ,
    thumbnail: "" 
  });
  const handleChange = e => {
    const { name, value} = e.target
    // console.log(e.target)
    setCourse({
        ...course,
        [name] : value
    })
 
  }

  const redirect = useNavigate() 

  const onSubmit = async () => {
    // alert("login done ");
    console.log(course);
    const data = await axios.post(`http://localhost:4000/createcourse`, course)
    // console.log(course.course)
    
    if (data.status === 200) {
        redirect  ("/addedcourses")    
    // alert("Success")
    }else{
      alert("failed")
  }
}

 
  return (
    <div>
      {/* <TeacherSidebar/> */}
      <Titlecontainer title="Create Course" />
      <div className="signin ">
      {console.log("Course",  course)}

        <div className="create-course ">
          <div className="input-div2 ">
            <label class="input-label2 h-20-semi  "> Name</label>
            <input
              type="text"
              className="input-text-box2 color-primary h-20-bold "
              name="coursename"
              value={course.coursename}
             onChange={(e) =>handleChange(e) }
            ></input>
          </div>
          <div className="input-div2">
            <label class="input-label2 h-20-semi  "> Links</label>
            <input
              type="text"
              className="input-text-box2 color-primary h-20-bold "
              name="links"
              value={course.links}
              onChange={(e) =>handleChange(e) }
            ></input>
          </div>{" "}
          <div className="input-div2">
            <label class="input-label2 h-20-semi  "> Skills</label>
            <input
              type="text"
              className="input-text-box2 color-primary h-20-bold "
              name="skills"
              value={course.skills}
              onChange={(e) =>handleChange(e) }
            ></input>
          </div>
          <div className="input-div2">
            <label class="input-label2 h-20-semi  "> Thumbnail </label>
            <input
              type="text"
              className="input-text-box2  color-primary h-20-bold"
              name="thumbnail"
              value={course.thumbnail}
              onChange={(e) =>handleChange(e) }
            ></input>
          </div>
        </div>
      </div>
      <div className="create-btn-div">
        <button
          type="button"
          className="secondary-btn  color-pure   h-20-semi "
          onClick={onSubmit}
        >
          Create Course
        </button>
      </div>
    </div>
  );
};

export default Createcourse;
