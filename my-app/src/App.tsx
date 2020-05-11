import React from 'react';
import './App.css';
import './antd.css'
import ProductPage from "./products/ProductPage";
import Footer from './products/components/Footer';


function App() {
  return (
    <div>
      <ProductPage/>
      <Footer/>
    </div>
  );
}

export default App;
