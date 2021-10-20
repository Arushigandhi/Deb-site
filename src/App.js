import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PrepTime from './pages/PrepTime';
import SpeakerRoles from './pages/SpeakerRoles';
import Themes from './pages/Themes';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </>
  );
}