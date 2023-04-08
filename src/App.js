import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import RestrauntMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


//default Export
// import Header from "./components/Header"
//Named Import
// import { Title } from "./components/Header";

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

// never create component inside component 
// never create useState inside if else or for loop or outside functional component
const AppLayout = () => {
  return (
    // <React.Fragment>
      <>
      <Header />
      {/* {Outlet} */}
      <Outlet/>
      <Footer />
      </>
    // </React.Fragment>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <AppLayout />,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element : <Body />
      },
      {
        path: "/about",
        element : <AboutUs />
      },
      {
        path :"/contact",
        element : <Contact />
      },
      {
        path:"/restaurant/:id",
        element : <RestrauntMenu />
      }
    ]
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
