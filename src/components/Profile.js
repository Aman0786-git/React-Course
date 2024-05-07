import { useEffect, useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //API CALL
    const timer = setInterval(() => {
      console.log("Hello REact");
    }, 1000);
    console.log("useEffect");
    return () => {
      clearInterval(timer);
      console.log("UseEffect Return");
    };
  }, []);

  console.log("render");
  return (
    <>
      <h1>Profile functional Component</h1>
      <h2>Name:{props.name}</h2>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(1)}>Count</button>
    </>
  );
};
export default Profile;
