import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Products from './components/Products';
import Contact from './components/Contact';
import { productData } from './components/Products/Data'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Welcome />
      <Products heading='Nuestra especialidad' data={productData}/>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
