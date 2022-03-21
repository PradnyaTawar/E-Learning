import { Outlet } from "react-router-dom";
import Studentsidebar from "../Students/Studentsidebar";
import TeacherSidebar from "../Teacher/TeacherSidebar";

const TAppLayout = () => {
    return <div style={{
        padding: '3px 0px 0px 280px'
    }}>
       <TeacherSidebar/>
        <Outlet />
    </div>;
};

export default TAppLayout;
