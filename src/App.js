import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import APOD from './components/APOD';
import Navigation from './components/Navigation';
import Curiosity from './components/rover_footages/Curiosity';
import Spirit from './components/rover_footages/Spirit';
import Opportunity from './components/rover_footages/Opportunity';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  const api_key = 'FtzxVQJdRfwpSZ47Ca82rtvtU5ypxVDwEMNRfbFR'
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className='container content'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/apod" component={(props) => <APOD api_key={api_key} />} />
            <Route path="/roverfootage/curiosity" component={(props) => <Curiosity api_key={api_key} />}/>
            <Route path="/roverfootage/opportunity" component={(props) => <Opportunity api_key={api_key} />} />
            <Route path="/roverfootage/spirit" component={(props) => <Spirit api_key={api_key} />} />
          </Switch>

        </div>
      </div>
      <Footer />
    </Router>
    

  );
}

export default App;
