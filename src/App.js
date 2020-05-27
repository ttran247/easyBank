import React from 'react';
import './App.css';
import './Navigation'
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import Features from './Features';
import Article from './Article';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
      <Features />
      <Article />
      <Footer/>
    </div>
  );
}

export default App;
