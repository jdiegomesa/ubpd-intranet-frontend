import React, { Component } from 'react';
import { render } from 'react-dom';
import './main.css';
console.log('Este es mi archivo de prueba de Webpack');

class App extends Component{
  render(){
    return(
      <h1></h1>
    )
  }
}

render(<App/>, document.getElementById('app'));
