import React, { Component } from 'react';
import Map from './Map';
import axios from 'axios';
import Weather from './Weather';
import Movies from './Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';

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
      show:false,
      movieExpressData:'',
      showMovies:false,
      h1:'',
      h2:''
    };
  }
  locationFunction = async (event) =>{
    event.preventDefault();
    try{
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.newLocation}&format=json`;
      console.log(process.env.REACT_APP_MAP_URL,process.env.REACT_APP_LOCATION_KEY );
      const myRecust = await axios.get(url);
      axios.get(url);
      this.setState({
        data:myRecust.data[0],
      });
      this.addingWeather();
      // this.addingMovies();
      this.renderUpdate();
    }
    catch(error){
      alert(`${error}, Try again`);
    }
  };
  addingWeather = async() =>{
    const express =await axios.get(`${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`);
    this.setState({
      expressData:express.data,
      show:true
    });
  }
  addingMovies = async() =>{
    console.log(this.state.newLocation);
    const movieExpress =await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies?cityName=${this.state.newLocation}`);
    console.log(movieExpress);
    this.setState({
      movieExpressData:movieExpress.data,
      showMovies:true
    });
    console.log(this.state.movieExpressData);
  }
  uptateLocation = (event) =>{
    this.setState({
      newLocation:event.target.value,
    });
  }
  renderUpdate=()=>{
    console.log(this.state.data.lon);
    this.setState({
      p1:`welcome to ${this.state.data.display_name}`,
      p2:`lat: ${this.state.data.lat} & lon: ${this.state.data.lon}`,
      src:`${process.env.REACT_APP_PHOTO}?key=${process.env.REACT_APP_LOCATION_KEY}&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`,
      h1:'Top Movies',
      h2:'Weather Updates'
    });
  }
  render() {
    return (
      <div>
        <Map locationFunction={this.locationFunction}
          movies={this.addingMovies}
          uptateLocation={this.uptateLocation}
          renderUpdate={this.renderUpdate}
          p1={this.state.p1}
          p2={this.state.p2}
          src={this.state.src}
        />
        <h1 style={{marginTop:'20px'}}>{this.state.h2}</h1>
        {this.state.show ? <Weather expressArr={this.state.expressData} /> : null }
        <h1 style={{marginTop:'20px'}}>{this.state.h1}</h1>
        {this.state.showMovies ?
          <CardColumns >
            <Movies
              expressMoviesArr={this.state.movieExpressData}
            />
          </CardColumns>
          : null }
      </div>
    );
  }
}

export default Main;
