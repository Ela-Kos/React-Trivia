import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SetFooter.css";

const Footer = () => {
  return (
    <div>
      <Link to="/Quiz">
      <Button className="button-footer">PLAY</Button>
      </Link>
    </div>
  );
};

export default Footer;
