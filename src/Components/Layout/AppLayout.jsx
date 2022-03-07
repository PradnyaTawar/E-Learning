import { Outlet } from "react-router-dom";
import Studentsidebar from "../Students/Studentsidebar";
import Studentprofile from "../Students/Studentprofile";

const AppLayout = () => {
    return <div style={{
        padding: '5px 0px 0px 320px'
       
    }}>
        <Studentsidebar />
      
        <Outlet />

    </div>;
};

export default AppLayout;
