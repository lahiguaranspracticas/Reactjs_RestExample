import React, {Component} from 'react';
//import logo from './assets/logo.svg';
import './styles/App.css';
import { Button } from 'reactstrap'
import { BrowserRouter as AppRouter, Route, Link } from "react-router-dom";


class App extends Component {
  
  constructor(props){
    super(props)
    this.state = [];
  }
  
  render(){
    return (
      <div>
      <AppRouter>
        <BrowserRouter>
         <link to= "/hello"> hello click me </link>
        </BrowserRouter>
      </AppRouter>
      </div>
    );
  }
}

export default App;
