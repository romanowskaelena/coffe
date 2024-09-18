import React from 'react'
import "./App.scss";
import Home from './pages/Home/Home';
import {Routes, Route} from "react-router-dom";
import Products from './components/Products/Products';
import ProductSingle from './pages/ProductSingle/ProductSingle';

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}>
              <Route index element={<Products />} />
              <Route path="/categories/:categoryId" element={<Products />} />
          </Route>

          <Route path="/product/:productId" element={<ProductSingle />}/>
      </Routes>
    </>
  )
}

export default App