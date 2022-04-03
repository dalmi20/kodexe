import React from 'react';
import './components/App.css';
import PageAccueilAdmin from './components/adminacc';
import Gcomptes from './components/gcomptes';
import Acompte from './components/acompte';
import Navbar from './components/navbar';
import Form from './components/ajoutecompte';
import Compte from './components/compte';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";


function App() {
  return ( 
     <div className="App">
       <Router>
         <Switch>
         <Route path="/" exact component={PageAccueilAdmin}/>
         <Route path="/gcompte/"  exact component={Gcomptes}/>
         <Route path="/gcompte/acompte/"  exact component={Acompte}/>
        </Switch>
       </Router>
     </div>

    
  );
}

export default App;
