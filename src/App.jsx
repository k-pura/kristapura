import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Component } from 'react';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';

export default class App extends Component{
  state = {

  }

  render() {
      return (
        <div className="App">

          <Nav />
    
          <Switch>
            <Route path='/home' render={props =>
            <Home />
            } />
            <Route path='/about' render={props =>
              <About {...props}/>
            } />
            <Route path='/Contact' render={props =>
              <Contact {...props}/>
            } />
            <Route path='/Portfolio' render={props =>
              <Portfolio {...props}/>
            } />
          </Switch>
          
        </div>
      )
  }
}

