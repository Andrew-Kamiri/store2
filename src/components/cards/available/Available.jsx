import "./Available.scss";
import bouky1 from "../../../Assets/Templates/bouky.jpg";
import couplegreen from "../../../Assets/Templates/couplegreen.jpg";
import green from "../../../Assets/Images/slider/next.jpg";
import bestrose from "../../../Assets/Images/landing/bestrose.jpg";
import { useEffect, useState } from "react";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const Available = ({ addtocart }) => {
  const [index, setIndex] = useState(0);
  const [numberImages, setNumberImages] = useState(4);
  const handlesubmit = (item) => {
    addtocart(item);
  };

  const handleresize = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setNumberImages(4);
    } else if (width >= 992) {
      setNumberImages(3);
    } else if (width >= 768) {
      setNumberImages(2);
    } else {
      setNumberImages(1);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleresize);
    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, []);

  const data = [
    { key: 3, img: green, heading: "green", price: "45", color: "Red" },
    { key: 4, img: couplegreen, heading: "green", price: "38", color: "Green" },
    { key: 5, img: bouky1, heading: "purplerose", price: "40", color: "Blue" },
    { key: 6, img: bestrose, heading: "rose", price: "37", color: "green" },
  ];
  const handleNext = () => {
    setIndex((index + 1) % data.length);
  };
  const handlePrev = () => {
    setIndex((index + data.length - 1) % data.length);
  };

  const filteredData = [];
  for (let i = 0; i < numberImages; i++) {
    const cardIndex = (index + i) % data.length;
    const card = data[cardIndex];
    filteredData.push(
      <div key={card.key} className="product">
        <div className="img">
          <img src={card.img} alt="" />
        </div>
        <div className="price">
          <h1>{card.heading}</h1>
          <p>
            <span>${card.price}</span>
          </p>
          <button onClick={() => handlesubmit(card)}>Add To Cart</button>
        </div>
      </div>
    );
  }

  return (
    <div className="available">
      <div className="heading">
        <p>
          Available <span>B</span>ouquent
        </p>
      </div>
      <div className="shopping">
        <div className="Previousicon" onClick={handleNext}>
          <FcPrevious
            style={{ width: "35px", height: "35px", color: "red" }}
            className="somenights"
          />
        </div>
        <div className="cont">{filteredData}</div>
        <div className="Previousicon" onClick={handlePrev}>
          <FcNext
            style={{ width: "35px", height: "35px", color: "red" }}
            className="somenights"
          />
        </div>
      </div>
    </div>
  );
};

export default Available;
