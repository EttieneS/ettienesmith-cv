import React, { Component } from 'react';
import ReactTable from 'react-table';
import api from '../api';

import styled from 'styled-components';
import 'react-table/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class VehiclesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vechicles: [],
      columns: [],
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })


    await api.getAllVehicles().then(vehicles => {
      this.setState({
        vehicles: vehicles.data.data,
        isLoading: false,
      })
    })
  }

  render() {
    const { vehicles, isLoading } = this.state
    console.log('TCL: VehicelesList -> render -> vehicles', vehicles)

    const columns = [
      {
        Header: 'ID',
        accessor: '_id',
        filterable: true,
      },
      {
        Header: 'Type',
        accessor: 'type',
        filterable: true,
      },
    ]

    let showTable = true
    if (!vehicles.length) {
        showTable = false
    }

    return (
      <Wrapper>
        <h1>List</h1>
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

export default VehiclesList
