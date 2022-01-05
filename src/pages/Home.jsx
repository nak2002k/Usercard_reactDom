// eslint-disable-next-line
import react from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import Usercard from "../components/usercard";
import "./lol.css"
const home = () =>{
    return(
        <body className="mo">
         <div className="why"><center>
             <h1>You are on the Home Page</h1>
            <p> <Link to="/users">Click here to see the current users</Link></p>
             </center>
         </div>
         </body>



    )
}
export default home;