import { IMG_CDN_URL } from "../config";
const MenuCard = ({id,name,imageId,isVeg,price,ratings,defaultPrice}) =>{
    const {rating}=ratings.aggregatedRating;
    return (
        <div key={id} className="menu_Card">
            <div className="menu_list">
            <h3 >{name}</h3>
            <h3>{isVeg?"VEG":"NON-VEG"}</h3>
            <h4>₹{(price?price:defaultPrice)/100}</h4>
            <h4>{rating?rating:"N/A"}⭐</h4>
            </div>
            <img src={imageId?IMG_CDN_URL+imageId:"https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/67728af4-bef4-4fe6-9e17-086cbb71ca12.jpeg"} />
        </div>
    
    )
    
}

export default MenuCard;