import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar } from '../components';
//import { BootstrapNavbar} from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { VehiclesList, CreateVehicle, EditVehicle } from '../views/vehicles';
import { CreateCustomer } from '../views/customers';


function App() {
  return (
    <Router>
      <NavBar />
      <div className = "container">
        <br/>
        <Route path="/vehicles" exact component={VehiclesList} />
        <Route path="/vehicles/edit/:id" component={EditVehicle} />
        <Route path="/vehicles/create" component={CreateVehicle} />
        <Route path="/customers/create" component={CreateCustomer} />
      </div>
    </Router>
  )
}

// function App() {
//   return (
//     <Router>
//       <BootstrapNavbar />
//       <Switch>
//         <Route path="/vehicles/list" exact component={VehiclesList} />
//       </Switch>
//     </Router>
//   );
// }

export default App;
