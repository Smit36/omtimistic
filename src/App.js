import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Content from './components/Content';
import About from './components/About';
import Software from './components/Software';

function App() {
  return (
    <div className='App'>
      <Fragment>
        <Navbar />
        <main className='main-content'>
          <Home />
          <div className='container-fluid'>
            <Content />            
            <About />
            <Software />
          </div>
          <Contact />
          <Footer />
        </main>
      </Fragment>
    </div>
  );
}

export default App;
