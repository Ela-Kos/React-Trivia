import React from "react";
import { Button } from "react-bootstrap";
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { IconContext } from "react-icons";
import "./Category.css";

const Category = () => {
  return (
    <div>
      <Button className="button">CATEGORY</Button>
      <TbBrandHtml5 />
      <TbBrandCss3 />
      <TbBrandJavascript />
    </div>
  );
};

export default Category;
