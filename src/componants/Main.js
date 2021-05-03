import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      data:'',
      newLocation:'',
      p1:'',
      p2:'',
      src:''
    };
  }
  locationFunction = async (event) =>{
    event.preventDefault();
    try{
      const url = `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&q=${this.state.newLocation}&format=json`;
      const myRecust = await axios.get(url);
      axios.get(url);
      this.setState({
        data:myRecust.data[0],
      });
      this.renderUpdate();
    }
    catch(error){
      alert(`${error}, Please enter a valid city value`);
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
      p2:`${this.state.data.display_name} is locatid at ${this.state.data.lat} by ${this.state.data.lon}`,
      src:`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`
    });
  }
  render() {
    return (
      <div>
        <Form locationFunction={this.locationFunction}
          uptateLocation={this.uptateLocation}
          renderUpdate={this.renderUpdate}
          p1={this.state.p1}
          p2={this.state.p2}
          src={this.state.src}/>
      </div>
    );
  }
}

export default Main;
