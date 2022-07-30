import './App.css';

import { Route, Switch } from "react-router-dom";

//VIEWS IMPORTS
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/api/author">
          <AddAuthor />
        </Route>
        <Route path="/api/edit/:id">
          <EditAuthor />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
