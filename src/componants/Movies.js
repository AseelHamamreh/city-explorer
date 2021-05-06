import React, { Component } from 'react'

export class Movies extends Component {
  render() {
    return ( 
      this.props.expressMoviesArr.map(d => {
        return(
          <div>
              <p>{d.title}</p>
              <img src={d.myImage} alt=''/>       
              <p>{d.description}</p> 
          </div>
        )
      })
    );
  }
}

export default Movies;
