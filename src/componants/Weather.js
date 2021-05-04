import React, { Component } from 'react'

export class Weather extends Component {
  render() {
    return ( 
      this.props.expressArr.map(d => {
        return(
          <div>
            <p>Date: {d.date} | Weather Description: {d.description}. </p>
          </div>
        )
      })
    );
  }
}

export default Weather;
