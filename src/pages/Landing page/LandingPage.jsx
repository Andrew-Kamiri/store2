import "./LandingPage.scss";
import "../../components/Navbar/Navbar.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

import Description from "../../components/cards/description/Description.jsx";
import Reviews from "../../components/cards/reviews/Reviews.jsx";
import Available from "../../components/cards/available/Available.jsx";
import Footer from "../../components/Footer/Footer";

import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { useState } from "react";
import Slider from "../../components/Slider/Slider.jsx";
import Cart from "../../components/cart/Cart.jsx";

const LandingPage = () => {
  const [cart, setCart] = useState([]);
  const [hide, setHide] = useState(false);
  const [hideCart, setHideCart] = useState(true);
  const handleCart = () => {
    setHideCart(!hideCart);
  };
  console.log(hideCart);
  const addtocart = (product) => {
    const updatedcart = [...cart, product];
    setCart(updatedcart);
  };
  const removecart = (index) => {
    const subtractedcart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(subtractedcart);
  };
  console.log(cart);

  return (
    <div className="landingpage">
      <div className="cart" style={{ display: hideCart ? "none" : "block" }}>
        <Cart removecart={removecart} cart={cart} />
      </div>
      <div className={hide ? "left-sidebar" : "hide-sidebar"}>
        <Sidebar hide={hide} setHide={setHide} />
      </div>
      <div className="top">
        <Navbar hide={hide} setHide={setHide} handleCart={handleCart} />
      </div>

      <div className="middle" onClick={() => setHideCart(true)}>
        <div className="intro">
          <div className="heading">
            <h1>Express Your Love with Flowers</h1>
          </div>

          <div className="details">
            <p>
              "From classic roses to unique arrangements, we offer the perfect
              blooms to celebrate your love story. Discover our collection of
              love-inspired flower arrangements today."
            </p>
          </div>
          <div className="button">
            <button>Shop Now</button>
          </div>
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
      <div className="bottom">
        <div className="carddescription">
          <Description />
        </div>

        <div className="card">
          <Reviews />
        </div>

        <div className="cardbuy">
          <Available addtocart={addtocart} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
