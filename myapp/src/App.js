import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import './App.css';
import { Header, Footer, Content } from './core';

function App() {
  return (
    // <Provider store={null}>
    <Router>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Router>
    // </Provider >
  );
}

export default App;
