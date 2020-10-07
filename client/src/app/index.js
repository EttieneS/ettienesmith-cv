import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar } from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { VehiclesList, CreateVehicle, EditVehicle } from '../views/vehicles';
import { CreateCustomer } from '../views/customers';


function App() {
  return (



    <Router>
      <NavBar />


        <br/>
        <Route path="/vehicles" exact component={VehiclesList} />
        <Route path="/vehicles/edit/:id" component={EditVehicle} />
        <Route path="/vehicles/create" component={CreateVehicle} />
        <Route path="/customers/create" component={CreateCustomer} />

    </Router>
  )
}

export default App;
