import React from 'react';
import OrderList from './components/OrderList'
import Header from './components/Header'
// import logo from './logo.svg';
import './App.css';

const products = [
  {
    id: 1,
    productName: 'galaxy series #astronaut',
    shopName:'accessory culture evolution',
    price: 1200,
    imgUrl: '#',
    isCommented: false,
  },
  {
    id: 2,
    productName: 'galaxy series #eve ghost',
    shopName:'accessory culture evolution',
    price: 1800,
    imgUrl: '#',
    isCommented: true,
  }
]

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <OrderList products={products}/>
    </div>
  );
}

export default App;
