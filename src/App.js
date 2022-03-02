import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Home from './components/home';
import Calculator from './components/simpleCalculator';
import Quote from './components/quote';
import NavBar from './components/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <section className="work-place">
            <Routes>
              <Route
                path="/math-magicians"
                element={<Home />}
              />
              <Route
                path="/Calculator"
                element={<Calculator className="calculator" />}
              />
              <Route
                path="/Quote"
                element={<Quote />}
              />
            </Routes>
          </section>
        </Router>
      </>
    );
  }
}

export default App;