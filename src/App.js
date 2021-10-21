import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from './pages/Intro';
import PrepTime from './pages/PrepTime';
import SpeakerRoles from './pages/SpeakerRoles';
import Themes from './pages/Themes';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import TypeWriter from './components/TypeWriter';
import BookNav from './components/BookNav';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <BookNav />
        <Switch>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/Intro">
            <Intro />
          </Route>
          <Route path="/PrepTime">
            <PrepTime />
          </Route>
          <Route path="/SpeakerRoles">
            <SpeakerRoles />
          </Route>
          <Route path="/Themes">
            <Themes />
          </Route>
        </Switch>
      </Router>
      <TypeWriter />
    </>
  );
}