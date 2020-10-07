import React, { Component } from 'react';
import vehicles from '../../api/vehicles';
import axios from 'axios';

export default class CreateVehicle extends Component {
  constructor(props) {
    super(props);

    this.onChangeVehicleType = this.onChangeVehicleType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: ''
    }
  }

  onChangeVehicleType(e) {
    this.setState({
      type: e.target.value
    });
    console.log(this.state['type']);
    console.log("Ma se kinnes");
  }

  onSubmit(e) {
    e.preventDefault();
    var newVehicle = {
      type: this.state['type']
    };

    console.log("onsubmit....");
    console.log("type " + this.state['type']);

    axios.post('http://localhose:5000/vehicles/create', newVehicle)
      .then(res => console.log(res.data));

    window.location = '/vehicles/create';
  }

  render() {
    return (
      <div>
        <h3>Create New Vehicle</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
         <label>Vehicle Type: </label>
         <input  type="text"
           required
           className="form-control"
           value={this.state.type}
           onChange={this.onChangeVehicleType}
           />
       </div>
          <div className="form-group">
            <input id="submit" type="submit" value="Create a new vehicle" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
