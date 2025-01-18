import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Product from './Product.jsx';
import ProductTab from './ProductTab.jsx';

function App() {
  return (
    <>
      <h2>Blockbuster Deals | Shop Now</h2>
      <Product/>
      <ProductTab/>
    </>
  );
}

export default App
