import React from "react";
import "./SliderPage.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowDropDown } from "@mui/icons-material";

const slideImages = ["images/four.jpg", "images/part.jpg"];

export default function SliderPage() {
  return (
    <div className="slide-page">
      <div className="vehicle-card">
        <div className="vehicle-card-title">
          <span>Find your right car</span>
        </div>
        <div className="vehicle-card-buttons">
        <div className='card-button'>
        <button>New Car</button>
        </div>
          <div className="card-button">
            <button>Used Car</button>
          </div>
        </div>
        <div className="vehicle-card-select">
          <div className="select-button">
            <input type="radio" checked="checked" name="radio" />
            <span>By Budget</span>
          </div>
          <div className="select-button">
            <input type="radio" name="radio" />
            <span>By Brand</span>
          </div>
        </div>
        <div className="vehicle-card-input">
          <div className="vehicle-card-input-box">
            <input type="input" placeholder="Select Brand" />
            <ArrowDropDown />
          </div>
          <div className="vehicle-card-input-box">
            <input type="input" placeholder="Select Model" />
            <ArrowDropDown />
          </div>
        </div>
        <div className="vehicle-card-search">
          <button>Search</button>
        </div>
        <div className="vehicle-card-advancedSearch"></div>
      </div>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <img src={slideImages[0]} alt="" />
          </div>
          <div className="each-slide">
            <img src={slideImages[1]} alt="" />
          </div>
        </Slide>
      </div>
    </div>
  );
}
