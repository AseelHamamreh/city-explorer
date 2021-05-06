import React, { Component } from 'react'

export class Weather extends Component {
  render() {
    return ( 
      this.props.expressArr.map(d => {
        return(
          <div>
            <p>Date: {d.date} | Weather Description: low of {d.lowT}, high of {d.highT} with {d.description}. </p>
          </div>
        )
      })
    );
  }
}

export default Weather;
