import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/pages/Homepage";
import Signin from "./Components/Teacher/Signin";
import Signup from "./Components/Teacher/Signup";
// import Home from "./Components/Home/Home";
import TeacherSidebar from "./Components/Teacher/TeacherSidebar";
import Createcourse from './Components/Teacher/Createcourse'
import Studentslist from './Components/Teacher/Studentslist'
import Addedcourses from './Components/Teacher/Addedcourses'
import TeacherProfile from './Components/Teacher/TeacherProfile'




function App() {
  return (
    <div>
      <BrowserRouter>
      <TeacherSidebar />
        <Routes>
        <Route exact path="/homepage" element={<Homepage />}></Route>
          {/* <Route exact path="/home" element={<Home />}></Route> */}
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/teacherprofile" element={<TeacherProfile />}></Route>
          <Route exact path="/create" element={<Createcourse />}></Route>
          <Route exact  path="/studentslist" element={<Studentslist />}></Route>
          <Route  exact path="/addedcourses" element={<Addedcourses />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
