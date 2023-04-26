import { useState } from "react";
const Profile = (props) =>{
    const [count,setCount]=useState(0);

    return (
        <>
        <h1>Profile functional Component</h1>
        <h2>Name:{props.name}</h2>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(1)}>Count</button>
        </>
    )
}
export default Profile;