
import './App.css';
import React, { useEffect, useState } from 'react';
import Dashboard from './views/Dashboard';

import { Route, Switch } from 'react-router-dom';

//VIEW IMPORTS
import AddPet from './views/AddPet';
import DetailView from './views/DetailView';
import EditPetView from './views/EditPetView';


function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/pet/new">
          <AddPet />
        </Route>
        {/* Change the ID */}
        <Route path="/pet/:id">
          <DetailView />
        </Route>
        <Route path="/edit/:id">
          <EditPetView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
