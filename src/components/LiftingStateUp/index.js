import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const LiftingStateUp = () => {
  const [newValue, setNewValue] = useState("");
  const handleValueChange = (valueFromA) => {
    console.log("Inside lifting state up: ", valueFromA);
    setNewValue(valueFromA);
  };

  return (
    <div>
      <h3>Lifting state up</h3>
      <ComponentA onValueChange={handleValueChange} />
      <ComponentB value={newValue} />
    </div>
  );
};

export default LiftingStateUp;
