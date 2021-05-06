import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


export class Movies extends Component {
  render() {
    return (
        <div>
      {this.props.expressMoviesArr.map(d => {
        return(
          <div>
            <Card style={{ width: '28rem',backgroundColor:'#e2bcb7' }}>
            <Card.Body>
                <Card.Title style={{fontSize:'26px'}}>{d.title}</Card.Title>
                <Card.Text style={{fontSize:'17px'}}>({d.date})</Card.Text>
                <Card.Img variant="top" src={d.image} />
                {/* <Card.Text>❤️ Average votes {d.avg}</Card.Text> */}
                <Card.Text style={{fontSize:'14px', paddingRight:'275px', marginTop:'5px'}} >❤️ Total votes: {d.total}</Card.Text>
                <Card.Text style={{fontSize:'17px'}}> {d.description}</Card.Text>
            </Card.Body>
            </Card>
          </div>
        )
      })
    }
    </div>
    );
  }
}

export default Movies;
