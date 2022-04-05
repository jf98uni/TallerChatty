import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import  {auth}  from './services/firebase';







class App extends Component {
  constructor() { 
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }
  
  render() {
    return  (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/chat" element={<Chat/>}></Route>
          <Route path="/signup"  element={<Signup/>}></Route>
          <Route path="/login"  element={<Login/>}></Route>
        </Routes>
      </Router>
    );
  }


}


export default App;
