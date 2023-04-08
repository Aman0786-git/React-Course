import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import MenuCard from "./MenuCard";


const RestrauntMenu = () => {
    //  how to read a dynamic URL parameter/id
    const {id:resId} = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [menu,setMenu]= useState({});
    
    useEffect(()=>{
        getRestaurantInfo() ;
    },[])

    
    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5830002&lng=88.3372909&restaurantId=133488&submitAction=ENTER")
        const {data:jsonData} = await data.json();
        setRestaurant(jsonData.cards[0].card.card.info);
        setMenu(jsonData.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
        
    }
    // console.log("Menu",menu)

const filterMenu = (menu,veg) => 
    {   
    return  menu.length===undefined?<h1>Loading</h1>:menu.filter((item)=>{
            const cardItem = item?.card?.card?.itemCards;
            // console.log(cardItem.size)
           return cardItem?.map((e)=>{
            const {isVeg}= e?.card?.info;
            if(isVeg==veg)return e;
})
        
})

}


    return (
        <div className="menuContainer">
            <div className="resInfo">
                <h2 className="resName">{restaurant.name}</h2>
                <h3 className="resCity">{restaurant.city}</h3>
                
            </div>
            
            <div className="menuList">
                { 
                    (menu.length===undefined?<h1>Loading...</h1>:menu.map((item)=>{
                        const cardItem = item?.card?.card?.itemCards;
                        return cardItem?.map((e)=>{
                        
                        const cardInfo = e?.card?.info;
                        const {isVeg} = cardInfo;
                        // console.log(cardInfo)
                        // console.log(...[cardInfo])
                        return( <MenuCard {...cardInfo }/>)
                       })
                        
                        
                    }))
                }
            </div>
        </div>
    )
}
export default RestrauntMenu;