import React from "react";
import Compte from "./compte";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
function Gcomptes(){
    return(
        <div>
        <Sidebar/>
        <Navbar name="Comptes" icon="bx bx-user"/>
        <Compte/>
        </div>
    );
}
export default Gcomptes;