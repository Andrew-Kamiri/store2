import "./Description.scss";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import weddingimg from "../../../Assets/Images/slider/wedding.jpg";
import birthdayimg from "../../../Assets/Images/slider/birthday.jpg";
import ceremonyimg from "../../../Assets/Images/slider/ceremony.jpg";
import funeralimg from "../../../Assets/Templates/bouky.jpg";
import { useEffect, useState } from "react";

const Description = () => {
  const [index, setIndex] = useState(0);
  const [numberImages, setNumberImages] = useState(3);

  const info = [
    { key: 1, h1: "weddings", img: weddingimg },
    { key: 2, h1: "Birthday", img: birthdayimg },
    { key: 3, h1: "Ceremonies", img: ceremonyimg },
    { key: 4, h1: "Funerals", img: funeralimg },
  ];
  const handleresize = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setNumberImages(3);
    } else if (width >= 992) {
      setNumberImages(2);
    } else if (width <= 768) {
      setNumberImages(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleresize);
    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, []);
  const handleNext = () => {
    setIndex((index + 1) % info.length);
  };
  const handlePrev = () => {
    setIndex((index + info.length - 1) % info.length);
  };
  const filteredData = [];
  for (let i = 0; i < numberImages; i++) {
    const cardIndex = (index + i) % info.length;
    const card = info[cardIndex];
    filteredData.push(
      <div key={card.key} className="event1">
        <h1> {card.h1}</h1>
        <div className="E-img">
          <img src={card.img} alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className="Description">
      <div className="Previousicon" onClick={handleNext}>
        <FcPrevious style={{ width: "35px", height: "35px", color: "red" }} />
      </div>
      {filteredData}
      <div className="Previousicon" onClick={handlePrev}>
        <FcNext style={{ width: "35px", height: "35px", color: "red" }} />
      </div>
    </div>
  );
};

export default Description;
