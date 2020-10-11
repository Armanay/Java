import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {store} from './store'
import {Provider} from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parking from './containers/parking'
import Profile from "./components/profile"
import Vehicle from "./components/newVehicle"

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Router>
                  <Route path="/" exact component={Parking}/>
                  <Route path="/userInfo" exact component={Profile}/>
                  <Route path="/newVehicle" exact component={Vehicle}/>
              </Router>
          </div>
      </Provider>
  );
}

export default App;
