import React, { Component } from 'react'
import axios from 'axios';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class App extends Component {
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
    const url = `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&q=${this.state.newLocation}&format=json`;
    const myRecust = await axios.get(url);
    axios.get(url);
    this.setState({
      data:myRecust.data[0],
    })
    this.renderUpdate();
  };
  uptateLocation = (event) =>{
      this.setState({
        newLocation:event.target.value,
      })
  }
  renderUpdate=()=>{
    this.setState({
      p1:`welcome to ${this.state.data.display_name}`,
      p2:`${this.state.data.display_name} is locatid at ${this.state.data.lat} by ${this.state.data.lon}`,
      src:`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`
    })
  }
  render() {
    return (
      <div style={{backgroundColor:'#f6e6e4', textAlign:'center',fontSize:'30px', marginTop:'-50px'}}>
        <h1 style={{border:'20px solid #ca8a8b', backgroundColor:'#ca8a8b',color:'white'}}>City Explorer</h1>
        <form onSubmit={this.locationFunction}>
          <label>Where would like to explore?</label>
          <br></br>
          <input style={{marginTop:'20px', width:'700px',height:'30px', backgroundColor:'#e2bcb7',fontSize:'30px'}} onChange={this.uptateLocation} type="text" />
          <br></br>
          <Button variant="flat" size="xxl" type="submit" onClick={this.locationFunction}>
          Explore!
          </Button>
        </form>
        <p>{this.state.p1}</p>
        <p>{this.state.p2}</p>
        <img src={this.state.src} alt='' />
        <h2>&copy; Aseel Hamamreh</h2>
        <style type="text/css">
          {`
          .btn-flat {
            background-color: #ca8a8b;
            color: white;
          }

          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
            margin-top:20px;
          }
          `}
        </style>
      </div>
    )
  }
}

export default App
