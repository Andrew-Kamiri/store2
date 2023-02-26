import "./Footer.scss";
import { ReactComponent as MySVG } from "../../Assets/Images/icon/logo.svg";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { SlSocialPintarest } from "react-icons/sl";
const Footer = () => {
  return (
    <div className="fOoter">
      <div className="tOp">
        <input type="text" placeholder="message" />
        <button>
          <p>Send Message</p>
        </button>
      </div>

      <div className="content">
        <div className="lOgo">
          <div className="lOgoimg">
            <MySVG
              style={{
                width: "4rem",
                height: "4rem",
              }}
            />
            <h1>&nbsp;BOQQY</h1>
          </div>
          <div className="lOgodesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi
            deleniti optio sunt dolore molestiae atque?
          </div>
          <div className="lOgoicons">
            <SlSocialInstagram className="icon" />
            <SlSocialTwitter className="icon" />
            <TiSocialPinterestCircular className="icon" />
            <SlSocialPintarest className="icon" />
          </div>
        </div>
        <div className="openinghours">
          <ul>
            <h1>Opening Hours</h1>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
          </ul>
        </div>
        <div className="locations">
          <ul>
            <h1>Locations</h1>
            <li>
              <p>Nairobi: City Square, Uhuru Highway</p>
            </li>
            <li>
              <p>Mombasa: Moi Avenue, Mombasa, Kenya</p>
            </li>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
            <li>
              <p>Monday:10am-9pm</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
