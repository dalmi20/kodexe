import React from "react";
import './compte.css'
function Compte (){
    return(
        <div class="compte">
        <div class="plus-recent">

         <div class="nav-recent">
             <i class="bx bxs-user-circle"></i>
             <span>Plus-Recent</span>
             <i class="bx bxs-x-circle" id="rm"></i>
             
         </div>
           
    
        </div>
        <div class="list-users">
        <div class="nav-list">

               <i class="bx bxs-user-detail"></i>
             <span>User-List</span>
             <a href="/gcompte/acompte/">
             <i class="bx bx-user-plus" id="plus"></i></a>
             <a href="#">
             <i class="bx bx-user-minus" id="minus"></i></a>
             <a href="#">
             <i class="bx bx-user-x" id="x"></i></a>
             </div>
        </div>
        </div>
        );
}
export default Compte;