import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import vehicles from '../../api/vehicles';
import styled from 'styled-components';
import 'react-table-6/react-table.css';
import axios from 'axios';

const Wrapper = styled.div(`padding: 0 40px 40px 40px;`);
const Update = styled.div(`color: #ef9b0f; cursor: pointer;`);
const Delete = styled.div(`color: #ff0000; cursor: pointer;`);

class UpdateMovie extends Component {
  updateUser = event => {
    event.preventDefault()

    window.location.href = `/movies/update/${this.props.id}`
  }

  render() {
    return <a class="btn btn-primary" onClick={this.updateUser}>Update</a>
  }
}


class DeleteMovie extends Component {
  deleteUser = event => {
    event.preventDefault();
    if (
      window.confirm(`Do you want to delete the movie ${this.props.id} permanently?`,)
    ) {
      vehicles.deleteMovieById(this.props.id);
      window.location.reload();
    }
  }


  render() {
    return <a class='btn btn-danger' type='button' onClick={this.deleteUser}>Delete</a>
  }
}


export default class VehiclesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        vehicles: [],
        columns: [],
        isLoading: false,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/vehicles')
      .then(response => {
        this.setState({ vehicles: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //componentDidMount = async() => {
    // this.setState({
    //   vehicles: ['test user'],
    //   type: 'test user'
    // });

    // this.setState({ isLoading: true });
    //
    // await vehicles.getAllVehicles().then(vehicles => {
    //   this.setState({
    //       _id: vehicles._id,
    //       type: vehicles.type,
    //       isLoading: false
    //   });
    // })
  //}

  render() {
    const { vehicles, isLoading } = this.state;
    console.log('TCL: VehiclesList -> render -> vehicles', vehicles)

    const columns = [
      {
        Header: 'ID',
        accessor: '_id',
        filterable: true,
      },
      {
        Header: 'Vehicle Type',
        accessor: 'type',
        filterable: true,
      },
      {
        Header: '',
        accessor: '',
        Cell: function(props) {
          return (
            <span>
                <UpdateMovie id={props.original._id} />
            </span>
          )
        },
      },
      {
        Header: '',
        accessor: '',
        Cell: function(props) {
          return (
              <span>
                  <DeleteMovie id={props.original._id} />
              </span>
          )
        },
      },
    ]

    let showTable = true;

    if (!vehicles.length) {
        showTable = false;
    }

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={vehicles}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    )
  }
}
