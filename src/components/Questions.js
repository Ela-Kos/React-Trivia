import React from "react";
import { Button } from "react-bootstrap";
import "./Questions.css";
import { TbCircleDotted, TbCircle } from "react-icons/tb";

const Questions = () => {
  return (
    <div>
      <Button className="button">QUESTIONS</Button>
      <p className="five">5</p>
      <p className="seven">7</p>
      <p className="ten">10</p>
    </div>
  );
};

export default Questions;
