import React, { Component } from 'react';
import Map from './Map';
import axios from 'axios';
import Weather from './Weather';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      data:'',
      newLocation:'',
      p1:'',
      p2:'',
      src:'',
      expressData:'',
      show:false
    };
  }
  locationFunction = async (event) =>{
    event.preventDefault();
    try{
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.newLocation}&format=json`;
      const myRecust = await axios.get(url);
      axios.get(url);

      const express =await axios.get('http://localhost:3007/weather');
      this.setState({
        data:myRecust.data[0],
        expressData:express.data,
        show:true
      });

      this.renderUpdate();
      console.log(this.state.expressData);
    }
    catch(error){
      alert(`${error}, Try again`);
    }
  };
  uptateLocation = (event) =>{
    this.setState({
      newLocation:event.target.value,
    });
  }
  renderUpdate=()=>{
    this.setState({
      p1:`welcome to ${this.state.data.display_name}`,
      p2:`${this.state.data.display_name} is located at ${this.state.data.lat} by ${this.state.data.lon}`,
      src:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`,

    });
  }
  render() {
    return (
      <div>
        <Map locationFunction={this.locationFunction}
          uptateLocation={this.uptateLocation}
          renderUpdate={this.renderUpdate}
          p1={this.state.p1}
          p2={this.state.p2}
          src={this.state.src}
          />
       {this.state.show ? <Weather expressArr={this.state.expressData} /> : null }

      </div>
    );
  }
}

export default Main;
