import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

//components
import SearchForm from './components/SearchForm';
import Home from './components/Home.jsx';

import Person from './components/Person'; 
import Planet from './components/Planet';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path ="/"> 
            <SearchForm/>
          </Route>
          <Route exact path="/people/:id">
            <Person/> 
          </Route>
          <Route exact path="/planets/:id">
            <Planet/> 
          </Route>
         <Route exact path="/home">
          <Home/>
          </Route>
          <Route exact path="/search">
            <SearchForm/>
          </Route>
          {/* <Route path="/:word">
            <Word/>
          </Route> */}
        </Switch>
        <p>
          <Link to="/home">Home</Link>
           | 
          <Link to="/search">Search</Link>
        </p>
    </div>
  );
}

export default App;
