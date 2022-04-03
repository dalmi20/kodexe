import React from "react";
import Form from "./ajoutecompte";
import Ajoutecompte from "./ajoutecompte";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import './acompte.css'
function Acompte(){
return(
    <div>
        <Sidebar/>
       <Navbar name="Comptes" icon="bx bx-user-plus" />
       <div class="ajoute">
       <Form />
       </div>
        
    </div>
);
}
export default Acompte;