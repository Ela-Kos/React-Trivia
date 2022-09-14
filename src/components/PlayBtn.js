import React from "react";
import { Link } from "react-router-dom";
import './PlayBtn.css'

function PlayBtn() {
  return (
    <>
      <Link to="/Setup">
        <button className="playBtn">GO!</button>
      </Link>
    </>
  );
}

export default PlayBtn;
