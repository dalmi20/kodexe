import React from "react";
import "./sidebar.css"
import esikom from "./imags-css/esikom.png"
import{Link} from 'react-router-dom'
function Sidebar() {
    return(
      <div className="sidebar">
     <img src={esikom} alt="logo" id="logo_img"/>
        <div class="nav_list">
          <ul>
          <li>
            <a href="/">
              <i className='bx bx-home'></i>
             </a>
            <span className="tooltip">Accueil</span>
          </li>
  
          <li>
            <a href="/gcompte/">
              <i className='bx bx-user'></i>
                    </a>
            <span className="tooltip">GComptes</span>
          </li>
  
          <li>
            <a href="#">
              <i className='bx bx-group'></i>
               </a>
            <span className="tooltip">GRH</span>
          </li>
  
          <li>
            <a href="#">
              <i className='bx bx-book-content' ></i>
            </a>
            <span class="tooltip">Cours</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-calendar' ></i>
             </a>
            <span class="tooltip">Emploi-T</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-clipboard' ></i>
             </a>
            <span class="tooltip">Agenda</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-lock-alt' ></i>
             </a>
            <span class="tooltip">Accèes</span>
          </li>
            </ul>
            <div class="logout">
          <a href="#">
            <i class='bx bx-log-out' ></i>
          </a>
          <span class="tooltip">Log out</span>
        </div>
      </div>
    </div>
    );
}
export default Sidebar;