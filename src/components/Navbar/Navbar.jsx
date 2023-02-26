import "./Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { ReactComponent as MySVG } from "../../Assets/Images/icon/logo.svg";
import { BsCart4 } from "react-icons/bs";

const Navbar = ({ hide, setHide, handleCart }) => {
  const handleshow = () => {
    setHide(!hide);
  };

  return (
    <div className="navbar">
      <div className="top-left">
        <MySVG
          style={{
            width: "4rem",
            height: "4rem",
          }}
        />
        <h1>&nbsp;BOQQY</h1>
      </div>
      <div className="top-right">
        <ul>
          <li>New Arrival</li>
          <li>Best Seller</li>
          <li>Reviews</li>
          <li>Sign up</li>
          <li onClick={handleCart}>
            <BsCart4 />
          </li>
        </ul>
      </div>
      <div className="hamburger">
        <RxHamburgerMenu onClick={handleshow} className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
