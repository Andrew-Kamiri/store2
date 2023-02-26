import "./Sidebar.scss";
import { GrClose } from "react-icons/gr";

const Sidebar = ({ hide, setHide }) => {
  const handlehide = () => {
    setHide(!hide);
  };
  return (
    <div className="sidebar">
      <div className="x-icon">
        <GrClose onClick={handlehide} style={{ color: "red" }} />
      </div>
      <ul>
        <li>New Arrival</li>
        <li>Best Seller</li>
        <li>Reviews</li>
        <li>Sign up</li>
      </ul>
    </div>
  );
};

export default Sidebar;
