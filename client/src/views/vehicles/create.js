import React, { Component } from 'react';

export default class CreateVehicle extends Component {
  constructor(props) {
    super(props);

    this.onChangeVehicleType = this.onChangeVehicleType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: '',
      vehicles: []
    }
  }

  onChangeVehicleType(e) {
    this.setState({
      type: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    var vehicle = {
      type: this.state.type,
    };

    console.log(vehicle);
    window.location = '/';
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
            <input type="submit" value="Create a new vehicle" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
