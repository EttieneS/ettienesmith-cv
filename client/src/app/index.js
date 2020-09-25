import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BootstrapNavbar, NavBar } from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VehiclesList } from '../views/vehicles';
import axios from 'axios';
import DataTable from './data-table';


constructor(props) {
  super(props);
  this.state = { usersCollection: [] };
}

componentDidMount() {
  axios.get('http://localhost:4000/users')
    .then(res => {
      this.setState({ usersCollection: res.data });
    })
      .catch(function (error) {
        console.log(error);
      })
}

render() {
  return (
    <div className="wrapper-users">
      <div className="container">
        <table className="table table-striped table-dark">
          <thead className="thead-dark">
          <tr>
            <td>ID</td>
            <td>Make</td>
          </tr>
          </thead>
          <tbody>
            {this.dataTable()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

dataTable() {
  return this.state.usersCollection.map((data, i) => {
    return <DataTable obj={data} key={i} />;
  });
}

function App() {
  return (
    <Router>
      <BootstrapNavbar />
      <Switch>
        <Route path="/vehicles/list" exact component={VehiclesList} />
      </Switch>
    </Router>
  );
}

export default App;
