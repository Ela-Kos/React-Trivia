import "../components/Setup.css";
import React from "react";
import Header from "../components/SetHeader";
import Category from "../components/Category";
import Difficulty from "../components/Difficulty";
import Questions from "../components/Questions";
import Avatar from "../components/Avatar";
import Footer from "../components/SetFooter";
import image from '../img/bg3.png';
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbCircleDotted,
  TbCircle,
} from "react-icons/tb";

function Setup() {
  return (
    <div className="App" style={{ backgroundImage: `url(${image})` }}>
      <Header />
      <Category />
      <Difficulty />
      <Questions />
      <Avatar />
      <Footer />
      <p></p>
    </div>
  );
}

export default Setup;
