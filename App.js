import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/*
      Header
        |-> Logo(TITLE)
        |-> Nav Items(Right Side)
        |-> Cart

      Body
        |-> Search Bar   
        |-> Restraunt List
        |-> Restraunt Cards
                |-> Image
                |-> Name
                |-> Rating
                |-> Cusines

      Footer 
        |-> Links
        |-> Links

*/
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI="
    />
  </a>
);
const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

// Config Driven UI
const config =[
  {
    type:"carousel",
    cards:[
      {
        offerName:"50% off",
      },
      {
        offerName:"Free Delivery",
      }
    ]
  },
  {
    type:"restaurant",
    cards:[
      {
        name:"Burger King",
        image:"  https://res.cl oudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kack9oun6qtoz1tzbt0i",
        cusines:["Burger","American"],
        rating:"4.2"
      },
      {
        name:"KFC",
        image:"  https://res.cl oudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kack9oun6qtoz1tzbt0i",
        cusines:["Burger","American"],
        rating:"4.2"
      }
    ]
  }
]

const restrauntList=[
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "335340",
      "name": "Natural Ice Cream",
      "uuid": "b337325b-b3ed-4a33-aabc-6d52210527c4",
      "city": "7",
      "area": "Mali Panchghara",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "ys8l9grmqa6jkkizmfny",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "natural-ice-cream-salkia-howrah-howrah",
        "city": "kolkata"
      },
      "cityState": "7",
      "address": "61A, SRI AUROBINDO ROAD,P.O. SALKIA, P.S. GOLABARI,HOWRAH - 711106",
      "locality": "Salkia Howrah",
      "parentId": 2093,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "335340",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.8",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic",
    "scrubber": {
      "value": "RATING 4.8"
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "359306",
      "name": "Flurys",
      "uuid": "b4575c5a-573c-414e-b801-58a02131046b",
      "city": "7",
      "area": "Shibpur",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "b7wnafqqisa2snajhujr",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 3.5999999046325684,
      "slugs": {
        "restaurant": "flurys-howrah-howrah",
        "city": "kolkata"
      },
      "cityState": "7",
      "address": "Avani Riverside Mall, Kiosk-C, 1st Floor, 32 Jagat Banerjee Ghat Road, Howrah",
      "locality": "Shibpur",
      "parentId": 5537,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "359306",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 3.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.7",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic",
    "scrubber": {
      "value": "RATING 4.7"
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "624181",
      "name": "The Chung Wah",
      "uuid": "147902e1-4426-4992-bb19-e0237c2cefd3",
      "city": "7",
      "area": "Howrah",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "5823aea0fcb455f4f481cc425cdc1e8b",
      "cuisines": [
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 40,
      "minDeliveryTime": 40,
      "maxDeliveryTime": 40,
      "slaString": "40 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "the-chung-wah-howrah-howrah",
        "city": "kolkata"
      },
      "cityState": "7",
      "address": "290, GT ROAD SOUTH SHIBPUR, BALI , HOWRAH MUNICIPAL CORPORATION, HOWRAH WEST-711102",
      "locality": "GT Road",
      "parentId": 371394,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "624181",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.7",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic",
    "scrubber": {
      "value": "RATING 4.7"
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "513719",
      "name": "Biryani Hazir Ho",
      "uuid": "c0fc047c-2838-441c-b504-20719a06d8c3",
      "city": "7",
      "area": "Howrah",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "y5kk4yxylawiuvcdpck2",
      "cuisines": [
        "Biryani",
        "Mughlai",
        "North Indian",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 0.8999999761581421,
      "slugs": {
        "restaurant": "biryani-hazir-ho-howrah-howrah",
        "city": "kolkata"
      },
      "cityState": "7",
      "address": "The Howrah Hotel, 1 Mukhram Kanoria Road, ULUBERIA-II, Howrah, West Bengal -711101",
      "locality": "Uluberia-Ii",
      "parentId": 9179,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "513719",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.7",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic",
    "scrubber": {
      "value": "RATING 4.7"
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "316580",
      "name": "NIC Ice Creams",
      "uuid": "4cb5e3cc-44ee-4657-ad37-b9a97095369e",
      "city": "7",
      "area": "Salkia",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "91d6dda411b108965541c16ac1cfe2bc",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 12000,
      "costForTwoString": "₹120 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "nic-natural-ice-creams-cloud-3-adarsh-nagar",
        "city": "kolkata"
      },
      "cityState": "7",
      "address": "Shop No.26, Mackenzie Lane, LP-293/51, Howrah-711101",
      "locality": "Mackenzie Lane",
      "parentId": 6249,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "316580",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.7",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic",
    "scrubber": {
      "value": "RATING 4.7"
    }
  },
 
]


//Optional Chaining
const RestrauntCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating}⭐</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list">{
      restrauntList.map((restaurant)=>{
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
      })
    }
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
