import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
 function PageAccueilAdmin(){
   return(
     <div>
       <Sidebar />
       <Navbar name="Accueil" icon="bx bx-home"/>
      </div>
   );
   
 }
 export default PageAccueilAdmin;