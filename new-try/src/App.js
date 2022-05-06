// import logo from './logo.svg';
import Header from './Header';
import React from 'react';
import Counter from './Counter'
import './App.css';

function App() {
  return (
      <div>
        {/* <Counter count={7}></Counter> */}
        <Counter counter={3}></Counter>

      </div>
      );
}

export default App;
