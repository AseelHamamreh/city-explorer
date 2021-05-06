import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export class Form extends Component {
  render() {
    return (
      <div >
        <form onSubmit={this.props.locationFunction}>
          <label>Where would like to explore?</label>
          <br></br>
          <input placeholder="City Name" style={{marginTop:'20px', width:'700px',height:'40px', backgroundColor:'#e2bcb7',fontSize:'30px'}} onChange={this.props.uptateLocation} type="text" />
          <br></br>
          <Button variant="flat" size="xxl" type="submit" onClick={this.props.movies}>
          Explore!
          </Button>
        </form>
        <p>{this.props.p1}</p>
        <p>{this.props.p2}</p>
        <img src={this.props.src} alt='' />
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
    );
  }
}
export default Form;
