import React, { Component } from 'react';
import customers from '../../api/customers';

export default class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.onChangeCustomername = this.onChangeCustomername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      customer_name: ''
    };
  }

  onChangeCustomername(e) {
    this.setState({
      customer_name: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newCustomer = {
      customer_name: this.state.customer_name,
    };
    console.log(newCustomer);
    customers.CreateCustomer('http://localhost:5000/customer/create', newCustomer)
      .then(res => console.log(res.data));

    this.setState({
      customer_name: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Customer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Customer name: </label>
            <input  type="text"
              required
              className="form-control"
              value={this.state.customer_name}
              onChange={this.onChangeCustomername}
              />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
