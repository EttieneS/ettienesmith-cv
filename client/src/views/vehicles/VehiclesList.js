import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import api from '../../api';

import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div('padding: 0 40px 40px 40px');

class VehiclesList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         vehicles: [],
    //         columns: [],
    //         isLoading: false,
    //     }
    // }
    //
    // componentDidMount = async () => {
    //     this.setState({ isLoading: true })
    //
    //     await api.getAllVehicles().then(vehicles => {
    //         this.setState({
    //             vehicles: vehicles.data.data,
    //             isLoading: false,
    //         })
    //     })
    // }

    render() {
        // const { vehicles, isLoading } = this.state
        // console.log('TCL: VehiclesList -> render -> vehicles', vehicles)
        //
        //
        // const columns = [
        //     {
        //         Header: 'ID',
        //         accessor: '_id',
        //         filterable: true,
        //     },
        //     {
        //         Header: 'Type',
        //         accessor: 'type',
        //         filterable: true,
        //     },
        // ]
        //
        // let showTable = true
        // if (!vehicles.length) {
        //     showTable = false
        // }

        return (
          <div>
              <p>In this page you'll see the form to add a movies</p>
          </div>
            // <Wrapper>
            //   <p>Vehicles Table</p>
            //   {showTable && (
            //       <ReactTable
            //           data={vehicles}
            //           columns={columns}
            //           loading={isLoading}
            //           defaultPageSize={10}
            //           showPageSizeOptions={true}
            //           minRows={0}
            //       />
            //   )}
            // </Wrapper>
        )
    }
}


export default VehiclesList
