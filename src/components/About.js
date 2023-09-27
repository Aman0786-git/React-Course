import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent-Constructor")
  }

  componentDidMount(){
    // Best place to make API Call
    // console.log("Parent- componentDidMount")
  }
  
  render() {
    // console.log("parent-render")
    return (
      <div>
        <h1>About Us</h1>
        <p>This is Namaste React Live Course Chapter 9: Finding the Path </p>
        <ProfileFunctionalComponent name={"AmanFunctional"} />
        {/* <ProfileClass name={"First Child"} xyz={"xyz"} /> */}
      </div>
    );
  }
}

/* 
Parent-Constructor
Parent-render
   Child- Constructor 
   Child- Render

   DOM is updated
   json is logged in console
   Child componentDidMount

Parent - componentDidMount
*/

export default AboutUs;
