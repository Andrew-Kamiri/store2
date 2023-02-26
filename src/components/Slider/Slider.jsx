// import { useEffect, useState } from "react";
import "./Slider.scss";
import imgr from "../../Assets/Images/slider/next.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="img">
        <img src={imgr} alt="" />
      </div>
    </div>
  );
};

export default Slider;
