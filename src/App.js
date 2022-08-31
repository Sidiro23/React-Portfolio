import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills/Skills'
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <div>
      <Header/>
      <Skills />
      <Footer/>
    </div>
  );
}

export default App;