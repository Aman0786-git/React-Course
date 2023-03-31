import { IMG_CDN_URL } from "../config";
//Optional Chaining
const RestrauntCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h5>{avgRating}⭐</h5>
      </div>
    );
  };
export default RestrauntCard;