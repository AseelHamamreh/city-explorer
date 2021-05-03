import React, { Component } from 'react';
import Header from './componants/Header';
import Footer from './componants/Footer';
import Main from './componants/Main';

export class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#f6e6e4', textAlign:'center',fontSize:'30px', marginTop:'-50px'}}>
        <Header />
        <Main />
        < Footer />
      </div>
    );
  }
}

export default App;
