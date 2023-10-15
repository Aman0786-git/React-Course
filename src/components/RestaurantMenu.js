import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import MenuCard from "./MenuCard";
import useRestaurant from "../utils/useRestaurant";
// import useMenu from "../utils/useMenu";

const RestrauntMenu = () => {
  //  how to read a dynamic URL parameter/id
  const { id } = useParams();
  // console.log(id);
  /* const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState({}); */
   
  const val= useRestaurant(id);
  const {restaurant,menu}=val;

  /* useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5830002&lng=88.3372909&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const { data: jsonData } = await data.json();
    console.log(jsonData)
      // console.log(jsonData.cards[0].card.card.info)
    setRestaurant(jsonData.cards[0].card.card.info);
    setMenu(jsonData.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  } */
//   console.log("Menu",menu)
//   console.log(restaurant);
  return (

    <div className="menuContainer" key={restaurant.id}>
      <div className="resInfo">
        <h2 className="resName">
          {restaurant?.name},{restaurant?.city}
        </h2>
        <h5>{restaurant?.feeDetails?.message}</h5>
        <div className="resRating">
          <h4>{restaurant?.avgRating}⭐</h4>
          <h5>{restaurant?.totalRatingsString}</h5>
        </div>
      </div>

      <div className="menuList">
        {menu.length === undefined ? 
          <h1>Loading...</h1>
        : (
          menu.map((item) => {
            const cardItem = item?.card?.card?.itemCards ;
            return cardItem?.map((e) => {
              const cardInfo = e?.card?.info;
              // console.log(cardInfo)
              // console.log(...[cardInfo]);
              return <MenuCard {...cardInfo} />;
            });
          })
        )}
      </div>
    </div>
  );
};
export default RestrauntMenu;
