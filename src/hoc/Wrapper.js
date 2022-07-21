import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div style={{ height: "100px", background: "grey" }} className="hoc">
      {/* <div>I am a wrapper component</div> */}
      {children}
    </div>
  );
};

export default Wrapper;
