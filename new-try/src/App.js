// import logo from './logo.svg';
import Header from './Header';
import React from 'react';
import Counter from './Counter'
import './App.css';

function App() {
  return (
      <div>
        <Header name='Davi'
        links={['about', 'buy', 'contact', 'login']}></Header>
        <Counter count={7}></Counter>
        {/* <Counter count={3}></Counter> */}

      </div>
      );
}

export default App;
