import { useState,useEffect } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";


//What is state?
//State is a data that can be changed over time and can be used in our application.

//What is Hook?
//==> Hook is a function that allows us to use state in functional components without using class components and lifecycle methods.  

//What is useState()?
//==> useState() is a hook that allows us to use state in functional components  and it returns an array with two values. The first value is the state and the second value is a function that allows us to change the state.

//Why do we need state variable?
//==> We need state variable to store the data that can be changed over time and can be used in our application.

//What is useEffect()?
//==> useEffect() is a hook that allows us to use lifecycle methods in functional components. It takes two arguments, the first argument is a function that will be executed when the component is mounted and the second argument is an array of dependencies. If the array of dependencies is empty, the function will be executed only once when the component is mounted. If the array of dependencies is not empty, the function will be executed when the component is mounted and when any of the dependencies is changed.  


function filterData(searchText,restaurants){
  console.log(restaurants);
  return searchText==""?restaurants:restaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
  // return filteredData;
}



const Body = () => {
  const [allRestaurants,setallRestaurants] = useState([]); 
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  // Local Variable in React
  const [searchText, setSearchText] = useState(''); //returns -> [variableName, functionToChangeVariable]

  /*  useEffect(()=>{},[]) // [] -> dependency array -> if empty, it will run only once
   useEffect(()=>{},[searchText]) // if searchText changes, it will run again
   useEffect(()=>{},[searchText,restaurants]) // if searchText or restaurants changes, it will run again  
  */

  useEffect(()=>{
    // API Call
    getRestaurants()
  },[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5830002&lng=88.3372909&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    // setallRestaurants(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    // setFilteredRestaurants(json?.data?.cards[1].card.card.gridElements.infoWithStyle.info);
    // console.log(...restaurantList)
    setallRestaurants(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants); 
    
  }

  // console.log("render");
  /*
    render will be called before useEffect callback function
    it will be called everytime the state is changed
  */

    //Not render component 
    if(!allRestaurants)return null;
 // Conditional Rendering
  // if restaurant.length is 0 show shimmer effect

  return (allRestaurants.length===0 )? <Shimmer/> : (
    
    <>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search..."
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={
          ()=>{
            // need to filter the data
            console.log(searchText)
            const Data = filterData(searchText,allRestaurants)
            //update the state - restaurants
            setFilteredRestaurants(Data);
          }
        } >Search</button>
    </div>
      <div className="restraunt-list">
        { 
          (filteredRestaurants.length===0)?<h1>No Restaurants Found</h1>:
          filteredRestaurants.map((restaurant) => {
            // console.log(restaurant);
          return (  
            <Link to={"/restaurant/"+restaurant.info.id } key={restaurant.info.id} >
            <RestaurantCard {...restaurant.info}  />
            </Link>
          );
        })
        }
      </div>
    </>
  );
};
export default Body;
