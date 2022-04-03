import React from "react";
import './navbar.css';
import user from './imags-css/anes.png'
function Navbar(props){
    return(
        <div className="nav">
         <div className="border"></div>
         <div className="accueil">
         <i class={props.icon}></i>
            <span class="span1">{props.name}</span>
         </div>
           <div class="navele">
            <a class="a1" href="#">
              <i class='bx bx-envelope'></i>
             </a>
             <a class="a2" href="#">
            <i class='bx bx-globe'></i>
             </a>
            <a class="a3" href="#">
              <i class='bx bx-bell'></i>
             </a>
             <a class="a4" href="#">
              <i class='bx bx-cog'></i>
             </a>
             <div class="drop">
             <div class="dropdown">
  <a class="btn" href="#" >
    <img src={user} alt="user"/>
    <p>Profile</p>
  </a>
</div>
             </div>
            </div>

           </div>
    );

}
export default Navbar;