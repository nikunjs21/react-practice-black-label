import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";

// const CustomFrag = (props) => {
//     return props.children;
// }

const Sample = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div>First</div>
      <div>Second</div>
      <Button onClick={() => {
        navigate("/");
      }} >Go to Home</Button>
    </React.Fragment>
  );
};

export default Sample;
