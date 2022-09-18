import React from "react";
import { Button } from "react-bootstrap";
import "./Questions.css";
import { TbCircleDotted, TbCircle } from "react-icons/tb";

const Questions = () => {
  return (
    <div>
      <Button className="button">QUESTIONS</Button>
        <div className="centred-grid-container">
          <p className="centred-grid-item five">5</p>
          <p className="centred-grid-item seven">7</p>
          <p className="centred-grid-item ten">10</p>
          <p className="centred-grid-item ten">10</p>
        </div>
    </div>
  );
};

export default Questions;
