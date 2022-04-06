import React from "react";
import { Link } from "react-router-dom";
import img2 from "../Assets/Frame.svg";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileLogo from "../Assets/jsx_svg/profile-logo";
import Profillogo from "../Assets/jsx_svg/profilelogo";
import CreateLogo from "../Assets/jsx_svg/create-course";
import ListLogo from "../Assets/jsx_svg/list-logo";
import TeacherProfile from "../Teacher/TeacherProfile";
import Studentprofile from "./Studentprofile";
import Notes from "./Notes";
import Courses from "./Courses";
import "./Student.scss";

const stusidebarNavItems = [
  {
    display: "Profile",
    icon: <ProfileLogo color="#fff" />,
    to: "/studentprofile",
    section: "studentprofile",
  },
  {
    display: "Courses",
    icon: <ListLogo color="#fff" />,
    to: "/courses",
    section: "",
  },
  {
    display: " Notes",
    icon: <CreateLogo color="#fff" />,
    to: "/createnotes",
    section: "",
  },
];

const Studentsidebar = () => {
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
    const activeItem = stusidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo d-flex-ac just-center padding ">
          <img className="img" alt="img" width="30" src={img2} />
          <h1 className="color-pure  just-center h-20-bold">
            <a className="color-pure just-center" href="/studentlandingpage">
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
          {stusidebarNavItems.map((item, index) => (
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
          <button
            type="button"
            className="primary-btn color-primary h-20-semi "
          >
            <a className="color-primary" href="/">
              Logout
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Studentsidebar;
