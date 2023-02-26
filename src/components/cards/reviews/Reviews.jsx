import "./Reviews.scss";
import img2 from "../../../Assets/Images/icon/head.jpg";
import img4 from "../../../Assets/Images/icon/womanhead.jpg";
const Reviews = () => {
  return (
    <div className="review">
      <div className="first">
        <div className="pic">
          <img src={img2} alt="" />
        </div>
        <div className="review">
          <p>
            <span>"</span> I ordered a bouquet for my wife's birthday and was
            blown away by the quality and beauty of the flowers. The staff was
            also very helpful in helping me pick the right arrangement. I highly
            recommend this flower store!<span>"</span>
          </p>
        </div>
      </div>
      <div className="first">
        <div className="pic">
          <img src={img4} alt="" />
        </div>
        <div className="review">
          <p>
            <span>"</span> I had a great experience with this flower store. They
            were able to create a custom arrangement for my friend's wedding and
            it turned out even better than we could have imagined. The flowers
            were fresh and lasted for weeks after the wedding. I will definitely
            be using this store again in the future!<span>"</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
