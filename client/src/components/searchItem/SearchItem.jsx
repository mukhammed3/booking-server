import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ i }) => {
  return (
    <div className="searchItem">
      {/* <img src={i.photos[0]} alt="" className="siImg" /> */}
      <div className="siDesc">
        <h1 className="siTitle">{i.name}</h1>
        <span className="siDistance">{i.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{i.desc.split("", [100])}...</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {SearchItem.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{i.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">{i.cheapestPrice}$</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${i._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
