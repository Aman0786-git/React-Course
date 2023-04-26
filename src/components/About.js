import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor")
  }

  componentDidMount(){
    // Best place to make API Call
    console.log("Parent- componentDidMount")
  }

  render() {
    console.log("parent-render")
    return (
      <div>
        <h1>About Us</h1>
        <p>This is Namaste React Live Course Chapter 9: Finding the Path </p>
        <ProfileFunctionalComponent name={"AmanFunctional"} />
        <ProfileClass name={"First Child"} xyz={"xyz"} />
      </div>
    );
  }
}

/* 
Parent-Constructor
Parent-render
    First Child - Constructor
    First Child - render
        Second Child - Constructor
        Second Child - render
    First Child - componentDidmount
        Second Child - componentDidmount
Parent - componentDidMount

*/

export default AboutUs;
