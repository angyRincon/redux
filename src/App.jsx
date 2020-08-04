import React, { Fragment } from 'react';

import { Provider } from 'react-redux';
import { getStore } from './redux/store';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from 'react-router-dom'

import Pokemons from './Components/Pokemons';
import Details from './Components/Details';
import DetailPrueba from './Components/DetailPrueba';


function App() {

  const store = getStore();

  return (
    <Fragment>
      <Router>
        <div className="container mt-5">
          <div className="btn-group">

            <Link to="/" className="btn btn-danger">
              GET POKEMONS
            </Link>

            <Link to="/details" className="btn btn-danger">
              DETAILS
            </Link>

            <Link to="/previous" className="btn btn-danger">
              I DON'T KNOW
            </Link>

          </div>

          <Switch>

            <Route path="/details">
              {/* <Details/> */}
              <Provider store={store}>
                <DetailPrueba />
              </Provider>
            </Route>

            <Route path="/" exact>
              <Provider store={store}>
                <Pokemons />
              </Provider>
            </Route>
          </Switch>









        </div>
      </Router>
    </Fragment>
  );
}

export default App;
