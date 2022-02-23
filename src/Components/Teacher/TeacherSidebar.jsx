import React from "react";
import "./Teacher.scss";
import { Link } from "react-router-dom";

import img2 from "../Assets/Frame.svg";
import img3 from "../Assets/Profile-Icon.png";
// import img4 from "../Assets/profile.png";
// import BrandLogo from "../Assets/jsx_svg/brand-logo";
import ProfileLogo from "../Assets/jsx_svg/profile-logo";
import CreateLogo from '../Assets/jsx_svg/create-course';
import ListLogo from '../Assets/jsx_svg/list-logo';
import AddedcourseLogo from '../Assets/jsx_svg/addedcourse-logo';



const TeacherProfile = () => {
  return (
    <div>
      <div className="sidebar just-center">
        <div className="sidebar-logo d-flex-ac">
          <img className="img " alt="img" width="30" src={img2} />
          <h1 className="color-pure h-20-bold">
            <a className="color-pure" href="/">
              E-Learning
            </a>
          </h1>
        </div>
        <img className="img3" alt="img" width="40" src={img3} />

        <div className="sidebar-links">
          <ul>
            <li className="active-sidebar-link">
              <span className=" d-flex-ac">
                {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
                <ProfileLogo color="#a055ff" />
                <Link  to="/teacherprofile">
                  Profile
                </Link>
              </span>
            </li>
            <li className="active-sidebar-link">
              <span className=" d-flex-ac">
                {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
                <CreateLogo color="#a055ff" />
                <Link  to="/create">
                  Create Course
                </Link>
              </span>
            </li>
            <li className="active-sidebar-link">
              <span className=" d-flex-ac">
                {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
                <ListLogo color="#a055ff" />
                <Link  to="/studentslist">
                  Student list
                </Link>
              </span>
            </li>
            <li className="active-sidebar-link">
              <span className=" d-flex-ac">
                {/* <img className="img2" alt="img" width="40" src={img2} />{" "} */}
                <AddedcourseLogo color="#a055ff" />
                <Link  to="/addedcourses">
                  Added courses
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="logout-btn-div">
          <button
            type="button"
            className="primary-btn color-primary h-20-semi "
          >
            <a href="/home">Logout</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
