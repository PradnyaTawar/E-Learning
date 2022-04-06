import Titlecontainer from "../Containers/title-container.jsx";
import img2 from "../Assets/image 1.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Studentprofile = () => {
  const [user, setUser] = useState({
      fullname: "",
      username: "",
      contact: "",
      password: "",
      
  });
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
      const data =  await axios.get(` http://localhost:4000/get-profile/Pradnya` )
      console.log(data.data);
      
      setUser({fullname : data.data.fullname,
      username: data.data.username,
      contact: data.data.contact,
      password : data.data.password})
      
  
}
  return (
    <div>
      <Titlecontainer title="Student Details" />
      <div className="signin">
      {console.log("User",  user)}
        <div className="signin-img">
          <img className="img" alt="img" height="500" width="500" src={img2} />
        </div>
        <div className="sign-in-form">
          <div className="input-div">
            <label class="input-label h-30-semi color-primary  ">
              {" "}
             Full Name
            </label>
            <label class="input-label h-30-semi  "> 
              {user.fullname}</label>
          </div>

          <div className="input-div">
            <label class="input-label h-30-semi color-primary   ">
              {" "}
              Username
              
            </label>
            <label class="input-label h-30-semi  ">{user.username}  </label>
          </div>
          <div className="input-div">
            <label class="input-label h-30-semi color-primary  ">
              {" "}
              contact
             
            </label>
            <label class="input-label h-30-semi  "> {user.contact}</label>
          </div>
          <div className="input-div">
            <label class="input-label h-30-semi color-primary  ">
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

export default Studentprofile;
