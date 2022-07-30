import ProductForm from './components/ProductForm';
import {Route,Switch} from "react-router-dom";
import './App.css';
import Table from '../src/views/Table';
import Update from './views/Update';
import Main from '../src/components/Main';
import Detail from './views/Details';


function App() {
  return (
    <div className="App">
      {/* <a href='/product/detail'>Products</a>
      <h3>Product Manager</h3>
      <Main/>
       */}

      {/* <div className="App"> */}
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/api/product/:id">
          <Detail />
        </Route>
        <Route path="/api/:id/edit">
          <Update/>
        </Route>
      </Switch>

      {/* </div> */}

    </div>

  )

}

export default App;
