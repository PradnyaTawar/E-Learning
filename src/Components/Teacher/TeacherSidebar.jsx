import React from "react";
import "./Teacher.scss";
import { Link } from "react-router-dom";
// import TeacherProfile from "../Teacher/TeacherProfile"
import img2 from "../Assets/Frame.svg";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileLogo from "../Assets/jsx_svg/profile-logo";
import Profillogo from "../Assets/jsx_svg/profilelogo";
import CreateLogo from "../Assets/jsx_svg/create-course";
import ListLogo from "../Assets/jsx_svg/list-logo";
import AddedcourseLogo from "../Assets/jsx_svg/addedcourse-logo";
import TeacherProfile from "./TeacherProfile";
import Createcourse from "./Createcourse";
import { Outlet } from "react-router-dom";

const teasidebarNavItems = [
  {
    display: "Profile",
    icon: <ProfileLogo color="#fff" />,
    to: "/teacherprofile",
    section: "studentprofile",
  },
  {
    display: "Create Course",
    icon: <CreateLogo color="#fff" />,
    to: "/create",
    section: "",
  },

  {
    display: " Added Courses",
    icon: <AddedcourseLogo color="#fff" />,
    to: "/addedcourses",
    section: "",
  },
  {
    display: " Students List",
    icon: <ListLogo color="#fff" />,
    to: "/studentslist",
    section: "",
  },
];

const TeacherSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = teasidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar-logo d-flex-ac just-center padding ">
        <img className="img" alt="img" width="30" src={img2} />
        <h1 className="color-pure  just-center h-20-bold">
          <a className="color-pure just-center" href="/teacherlandingpage">
            E-Learning
          </a>
        </h1>
      </div>
      <div className="just-center ">
        {" "}
        <Profillogo color="#f2f0f5" />
      </div>
      <div ref={sidebarRef} className="sidebar-links">
        <div
          ref={indicatorRef}
          className="sidebar-links__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {teasidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="logout-btn-div2 just-center ">
        <button type="button" className="primary-btn color-primary h-20-semi ">
          <a className="color-primary" href="/">
            Logout
          </a>
        </button>
      </div>
      <div className="right-sidebar">
        <TeacherProfile />
      </div>
    </div>
  );
};

export default TeacherSidebar;
