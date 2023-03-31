import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header,{Title} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import IMG_CDN_URL from "./config";
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


const AppLayout = () => {
  return (
    // <React.Fragment>
      <>
      <Header />
      <Body />
      <Footer />
      </>
    // </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
