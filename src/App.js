import "./App.css";
// import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/pages/Homepage";
import Signin from "./Components/Teacher/Signin";
import Signup from "./Components/Teacher/Signup";
import Home from "./Components/Home/Home";
// import Teachersidebar from "./Components/Teacher/TeacherSidebar";
import Createcourse from "./Components/Teacher/Createcourse";
import Studentslist from "./Components/Teacher/Studentslist";
import Addedcourses from "./Components/Teacher/Addedcourses";
import TeacherProfile from "./Components/Teacher/TeacherProfile";
import Viewstudent from "./Components/Teacher/Viewstudent";
import CourseDetails from "./Components/Teacher/CourseDetails";
import Studentsidebar from "./Components/Students/Studentsidebar";
import Studentprofile from "./Components/Students/Studentprofile";
import Courses from "./Components/Students/Courses";
import Notes from "./Components/Students/Notes";
import Studentcoursedetail from "./Components/Students/Studentcoursedetail";
// import TeacherDashboard from "./Components/pages/TeacherDashboard";
import TeacherSidebar from "./Components/Teacher/TeacherSidebar";
import Studentlandingpage from "./Components/Students/Studentlandingpage";
import Teacherlandingpage from "./Components/Teacher/Teacherlandingpage";
import AppLayout from "./Components/Layout/AppLayout";
import TAppLayout from "./Components/Layout/TAppLayout";
import Courseinfo from "./Components/pages/Courseinfo";
const App = () => {
  return (
    <div>
      {/* <Homepage /> */}
      {/* <Teachersidebar /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="/" element={<AppLayout />}>
            <Route
              exact
              path="/studentprofile"
              index
              element={<Studentprofile />}
            />
            <Route path="/courses" index element={<Courses />} />
            <Route exact path="/createnotes" element={<Notes />} />
            <Route exact path="/coursedetails" element={<CourseDetails />} />
            <Route
              exact
              path="/studentcoursedetails"
              element={<Studentcoursedetail />}
            />
          </Route>
          <Route path="/" element={<TAppLayout />}>
            <Route
              exact
              path="/teacherprofile"
              index
              element={<TeacherProfile />}
            />
            <Route exact path="/create" element={<Createcourse />} />
            <Route exact path="/studentslist" element={<Studentslist />} />
            <Route exact path="/addedcourses" element={<Addedcourses />} />
            <Route exact path="/studentcoursedetail" element={<CourseDetails />} />
            {/* <Route
              exact
              path="/studentcoursedetails"
              element={<Studentcoursedetail />}
            /> */}
            <Route exact path="/viewstudent" element={<Viewstudent />} />
          </Route>
          <Route exact path="/teacherdashboard" element={<TeacherSidebar />} />
          <Route
            exact
            path="/teacherlandingpage"
            element={<Teacherlandingpage />}
          />
  <Route exact path="/coursedetail" element={<CourseDetails />}></Route>
          <Route
            exact
            path="/studentlandingpage"
            element={<Studentlandingpage />}
          ></Route>

          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route path="/teacherprofile" element={<TeacherProfile />}></Route>
          <Route exact path="/create" element={<Createcourse />}></Route>
          <Route exact path="/studentslist" element={<Studentslist />}></Route>
          <Route
            exact
            path="/studentdashboard"
            element={<Studentsidebar />}
          ></Route>
          <Route
            exact
            path="/courseinfo"
            element={<Courseinfo />}
          ></Route>
          <Route path="/courses" index element={<Courses />}></Route>
          <Route path="/createnotes" element={<Notes />}></Route>

          <Route exact path="/addedcourses" element={<Addedcourses />}></Route>
          <Route exact path="/viewstudent" element={<Viewstudent />}></Route>
          <Route
            exact
            path="/coursedetails"
            element={<CourseDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
