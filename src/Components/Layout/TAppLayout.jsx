import { Outlet } from "react-router-dom";
import Studentsidebar from "../Students/Studentsidebar";
import TeacherSidebar from "../Teacher/TeacherSidebar";

const TAppLayout = () => {
    return <div style={{
        padding: '5px 0px 0px 320px'
    }}>
       <TeacherSidebar/>
        <Outlet />
    </div>;
};

export default TAppLayout;
