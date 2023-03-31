import { useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestaurantCard";

//What is state?
//State is a data that can be changed over time and can be used in our application.

//What is Hook?
//Hook is a function that allows us to use state in functional components without using class components and lifecycle methods.

//What is useState()?
//useState is a hook that allows us to use state in functional components  and it returns an array with two values. The first value is the state and the second value is a function that allows us to change the state.
//Why do we need state variable?
//We need state variable to store the data that can be changed over time and can be used in our application.

function filterData(searchText,restaurants){

  return searchText==""?restaurantList:restaurants.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
  // return filteredData;
}

const Body = () => {
  //Local Variable in JS
  const searchtxt = "KFC";
  // Local Variable in React
  const [searchText, setSearchText] = useState("KFC"); //returns -> [variableName, functionToChangeVariable]
  const [restaurants,setRestaurants] = useState(restaurantList);

  return (
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
            const Data = filterData(searchText,restaurants)
            //update the state - restaurants
            console.log(Data);
            setRestaurants(Data);
          }
        } >Search</button>
      </div>
      <div className="restraunt-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
