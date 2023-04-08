import { IMG_CDN_URL } from "../config";
const MenuCard = ({id,name,imageId,isVeg,price,ratings}) =>{
    return (
        
        <div key={id} className="menu_Card">
            {
                console.log(price.slice(-1,0))
            }
            <div className="menu_list">
            <h2>{name}</h2>
            <h3>{isVeg?"VEG":"NON-VEG"}</h3>
            <h4>₹{price}</h4>
            </div>
            <img src={IMG_CDN_URL+imageId} />
        </div>
    
    )
}

export default MenuCard;