import React from 'react'
import Createcourse from '../Teacher/Createcourse'
import TeacherProfile from '../Teacher/TeacherProfile'
import TeacherSidebar from '../Teacher/TeacherSidebar'

const TeacherDashboard = () => {
  return (
      <>
    {/* <div className="teacher-dashboard">
    <div className="leftbar"> <TeacherSidebar/></div>
    <div className="rightbar"> <TeacherProfile/></div>
    
    </div>
    */}
    <TeacherSidebar/>
    <TeacherProfile/>
    </>
  )
}

export default TeacherDashboard