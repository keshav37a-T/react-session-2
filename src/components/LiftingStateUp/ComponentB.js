import React from "react";

const ComponentB = ({ value }) => {
  console.log("value: ", value);
  return (
    <>
      <div>I am component B and I think {value}</div>
    </>
  );
};

export default ComponentB;
