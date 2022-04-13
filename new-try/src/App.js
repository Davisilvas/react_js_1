// import logo from './logo.svg';
import Header from './Header';
import React from 'react';
import './App.css';

function App() {
  return (
      <Header name='Davi'
      links={['about', 'buy', 'contact', 'login']}></Header>);
}

export default App;
