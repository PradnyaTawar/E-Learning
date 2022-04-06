import React, { useEffect, useState } from "react";
import TeacherSidebar from "./TeacherSidebar";
import Titlecontainer from "../Containers/title-container.jsx";
import img2 from "../Assets/class1.jpg";
import axios from "axios";

const TeacherProfile = () => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    contact: "",
    password: "",
    
});
useEffect(() => {
  getData()
}, [])
const getData = async (id) => {
    const data =  await axios.get(` http://localhost:4000/get-Teacher-profile/${id}` )
    console.log(data.data);
    
    setUser({fullname : data.data.fullname,
    username: data.data.username,
    contact: data.data.contact,
    password : data.data.password})
    

}
  return (
    <div>
      <Titlecontainer title="Teacher Details" />
      <div className="signin">
      {console.log("User",  user)}

        <div className="signin-img">
          <img className="img" alt="img" height="500" width="500" src={img2} />
        </div>
        <div className="sign-in-form">
          <div className="input-div">
            <label class="input-label h-20-semi color-primary  ">
              {" "}
             Full Name
            </label>
            <label class="input-label h-30-semi  ">  {user.fullname}</label>
          </div>

          <div className="input-div">
            <label class="input-label h-20-semi color-primary   ">
              {" "}
             Username
            </label>
            <label class="input-label h-30-semi  ">{user.username}</label>
          </div>
          <div className="input-div">
            <label class="input-label h-20-semi color-primary  ">
              {" "}
              Contact
            </label>
            <label class="input-label h-30-semi  "> {user.contact}</label>
          </div>
          <div className="input-div">
            <label class="input-label h-20-semi color-primary  ">
              {" "}
              Password
            </label>
            <label class="input-label h-30-semi  "> ******</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
