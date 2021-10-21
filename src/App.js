import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from './components/layout/partials/Header';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import './assets/css/App.css';
import Home from './components/views/Home.js';
import MenuModal from './components/elements/MenuModal';
import Nav from './components/layout/partials/Nav';
import Footer from './components/layout/partials/Footer';
import ScrollToTop from './components/elements/ScrollToTop';



function App() {
 
  return (
    <>
      <BrowserRouter>
        {/* HEADER */}
        <Header ID="main-header" />
        <ScrollToTop/>
        {/* CONTENT */}
        <Route exact path='/' component={Home}/>
        <Redirect to='/' />
        {/* FOOTER */}
        <Footer />
        {/* MODAL MENU */}
        <MenuModal>
          <Nav className="overlay-menu" />
        </MenuModal>
      </BrowserRouter>
    </>
  );
}

export default hot(App);
