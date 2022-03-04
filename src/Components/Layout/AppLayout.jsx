import { Outlet } from "react-router-dom";
import Studentsidebar from "../Students/Studentsidebar";
import TeacherSidebar from "../Teacher/TeacherSidebar";

const AppLayout = () => {
    return <div style={{
        padding: '5px 0px 0px 320px'
    }}>
        <Studentsidebar />
       {/* <TeacherSidebar/> */}
        <Outlet />
    </div>;
};

export default AppLayout;
