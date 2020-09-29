import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner'
import Product from './components/Product'

function App() {
  return (
    <div className="app">
        <Header/>
        <Banner/>
        <Product/>
 
    </div>
  );
}

export default App;
