import {React, Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import APOD from './components/APOD';
import Navigation from './components/Navigation';
import Curiosity from './components/rover_footages/Curiosity';
import Spirit from './components/rover_footages/Spirit';
import Opportunity from './components/rover_footages/Opportunity';
import Home from './components/Home';
import Footer from './components/Footer';

require('dotenv').config()

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        language: 'EN'
    }
    this.changeLanguage = this.changeLanguage.bind(this)
}
  changeLanguage(lang_code) {
    this.setState({
      language: lang_code
    })
  }
  render() {
  const api_key = process.env.REACT_APP_NASA_API_KEY
  var language = this.state.language
  return (
    <Router>
      <div className="App" style={{fontFamily: "RopaSans"}}>
        <Navigation language={language} changeLanguage={this.changeLanguage}/>
        <div className='container content'>
          <Switch>
            <Route exact path="/" component={(props) => <Home language={language}/>}/>
            <Route path="/apod/" component={(props) => <APOD api_key={api_key} language={language}/>} />
            <Route path="/roverfootage/curiosity/" component={(props) => <Curiosity api_key={api_key} language={language} />}/>
            <Route path="/roverfootage/opportunity/" component={(props) => <Opportunity api_key={api_key} language={language} />} />
            <Route path="/roverfootage/spirit/" component={(props) => <Spirit api_key={api_key} language={language} />} />
          </Switch> 
          
        </div>
      </div>
      <Footer language={language} />
    </Router>
  
  );}

  
}

export default App;
