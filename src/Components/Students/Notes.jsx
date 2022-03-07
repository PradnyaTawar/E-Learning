import React from "react";
import Titlecontainer from "../Containers/title-container.jsx";
import "./Student.scss";

const Notes = () => {
  return (
    <>
      <Titlecontainer title="Create Notes" />
      <div className="note-page-container">
        <div className="main">
          <div className="note-main-section1">
            <input
              className="input"
              placeholder="Create Your Notes"
              type="text"
            />

            <button className="btn color-primary h-20-bold ">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
