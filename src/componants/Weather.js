import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class Weather extends Component {
  render() {
    return(
    <div style={{textAlign:'center', paddingLeft:'230px'}}>
      <Table striped bordered hover style={{fontSize:'20px', width:'900px'}}>
      <thead>
        <tr>
          <th>Data</th>
          <th>Weather Description</th>
        </tr>
        </thead>
        <tbody>
      {this.props.expressArr.map(d => {
        return(
          <tr>
            <td> {d.date} </td>
            <td> low of {d.lowT}, high of {d.highT} with {d.description}. </td>
          </tr>
        )
      })
    }
      </tbody>
    </Table>
    </div>
    )
  }
}
export default Weather;
