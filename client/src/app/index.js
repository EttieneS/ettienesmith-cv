import React from 'react';
import ReactTable from 'react-table';
import api from '../api';
import styled from 'styled-components';
//import 'react-table/react-table.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BootstrapNavbar, testbar} from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VehiclesList } from '../views/vehicles';
import axios from 'axios';
//import DataTable from './data-table';

//const Wrapper = styled.div('padding: 0 40px 40px 40px;');

function App(){
  return (
    <BootstrapNavbar />
  )
}
// function App() {
//   return (
//     <Router>
//       <NavBar />
//     </Router>
//   )
// }
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
