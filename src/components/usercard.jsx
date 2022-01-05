import React from "react";
import "./usercard.css"
const usercard = ({Name , Url }) => {
    return(
        <div className="cards">

            <div className="whyto">
               <img id="lol" src={Url} width="145px" alt="profile" />

            </div>
            <div>
          <h2>Name: {Name}</h2>
          <h2>Course: B.Tech</h2>
          <h2>Role: Developer</h2>
          </div>




        </div>
    );
} 
export default usercard;