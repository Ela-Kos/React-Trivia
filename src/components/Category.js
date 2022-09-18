import React from "react";
import { Button } from "react-bootstrap";
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { IconContext } from "react-icons";
import "./Category.css";

const Category = () => {
  return (
      <div className="category-wrapper">
      <Button className="button">CATEGORY</Button>
        <div className="basic-grid">
            <div className="basic-grid-item"><TbBrandHtml5 /></div>
            <div className="basic-grid-item"><TbBrandCss3 /></div>
            <div className="basic-grid-item"><TbBrandJavascript /></div>
        </div>
      </div>
  );
};

export default Category;
