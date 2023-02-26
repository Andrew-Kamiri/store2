import "./Cart.scss";
import { ReactComponent as MySVG } from "../../Assets/Images/icon/logo.svg";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";
import { useState } from "react";
const Cart = ({ cart, removecart, hide }) => {
  const [quantity, setQuantity] = useState(1);
  const handleremove = (no) => {
    removecart(no);
  };
  const handleprice = () => {
    setQuantity(quantity + 1);
  };
  const handlesubtract = () => {
    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
  };
  return (
    <div className="cart">
      <div className="cart-header">
        <div className="c-logo">
          <MySVG
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "4rem",
            }}
          />
        </div>
        <div className="c-header">
          <h1>Your Shopping Cart</h1>
          <FiShoppingCart style={{ fontSize: "20px", color: "red" }} />
        </div>
      </div>
      <div className="cart-product">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div key={index} className="c-product">
              <div className="cartimg">
                <img
                  src={product.img}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "40%",
                  }}
                />
              </div>
              <div className="index">{index + 1}</div>
              <div className="cartname">{product.heading}</div>
              <div className="cartcolor">{product.color}</div>
              <div className="cartamount">${product.price * quantity}</div>

              <div className="remove">
                <IoIosRemoveCircle
                  className="icon"
                  style={{ fontSize: "25px", color: "red" }}
                  onClick={handlesubtract}
                />
                <MdAddCircle
                  className="icon"
                  style={{ fontSize: "25px", color: "green" }}
                  onClick={handleprice}
                />
              </div>
              <div className="cancel">
                <button onClick={() => handleremove(index)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
