import React from "react";
import { Button } from "react-bootstrap";
import "./Difficulty.css";

const Difficulty = () => {
  return (
    <div>
      <Button className="button">DIFFICULTY</Button>
      <h3>
        <li>
          <ul className="easy">Easy</ul>
          <ul className="med">Medium</ul>
          <ul className="hard">Hard</ul>
        </li>
      </h3>
    </div>
  );
};

export default Difficulty;
