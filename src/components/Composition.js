import React from "react";
import Wrapper from "../hoc/Wrapper";

const Composition = () => {
  return (
    <>
      <h3>Composition</h3>
      <Wrapper>
        <div>I am a child of wrapper</div>
      </Wrapper>
    </>
  );
};

export default Composition;
