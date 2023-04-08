import { IMG_CDN_URL } from "../config";

//Optional Chaining
const RestaurantCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
    return (
      
      <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId} />
        <h3>{name}</h3>
        <p>{...cuisines.slice(0,2).join(",")}</p>
        <h5>{avgRating==='--'?"NA ":avgRating}⭐</h5>
      </div>
    );
  };
export default RestaurantCard;