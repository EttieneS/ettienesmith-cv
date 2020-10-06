import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from '../components';
//import { BootstrapNavbar} from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VehiclesList } from '../views';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/vehicles/list" exact component={VehiclesList} />
      </Switch>
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
