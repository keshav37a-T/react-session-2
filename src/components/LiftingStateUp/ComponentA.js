import React, { useState, useRef, useEffect, useContext } from "react";
import { UserContextData } from "../Context/UserContext";
import Proptypes from "prop-types";

// useState, useEffect,
// useContext, useReducer, useLayoutEffect,

// context - global state

// custom Hooks

const ComponentA = ({ onValueChange }) => {
  const inputRef = useRef();
  const [value, setValue] = useState("");

  const data = useContext(UserContextData);

  console.log("data: ", data);

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setValue(value);
    onValueChange(value);
    // setValue((prevValue) => {
    //   return !prevValue;
    // });

    // let el = document.getElementById("1234");
    // let el = inputRef.current;
    // console.log(el.value);
  };

  useEffect(() => {
    console.log("Inside USEEFFECT: ", value);
    // make an api call with the updated - value
  }, [value]);

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 2000);
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        // id="1234"
        onChange={handleChangeInput}
        defaultValue={value}
      />
    </>
  );
};

ComponentA.propTypes = {
  onValueChange: Proptypes.func,
};

export default ComponentA;
