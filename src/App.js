import React from 'react';
import photo from './ram.jpg';
import './App.css';
import Resume from './components/resume.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Page from './components/page2.js'

class App extends React.Component{
  render(){
    return(
        <div className="App">
          <BrowserRouter>
            <Route exact path="/" component={Resume}/>
            <Route exact path="/page2" component={Page}/>
          </BrowserRouter>
        </div>
      );
  }
}

export default App;
