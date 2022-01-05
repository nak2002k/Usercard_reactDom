// eslint-disable-next-line
import react from "react";
import Usercard from "../components/usercard";
const users = () =>{
    return(
           <div>
                       <Usercard Name="Nakul" Url="https://picsum.photos/202"/> 
                        <Usercard Name="Anagha" Url="https://picsum.photos/204" />
                     <Usercard Name="Ajinkya" Url="https://picsum.photos/205"/>
                     <Usercard Name="Ashish" Url="https://picsum.photos/206"/>
                     <Usercard Name="Cham" Url="https://picsum.photos/207"/>
                     <Usercard Name="Jeet" Url="https://picsum.photos/208"/>

           </div>




    )
}
export default users;