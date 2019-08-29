import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Feed } from './pages/feed';
import { SeriousnessMap } from './pages/seriousness-map';
import { BasicInfos } from './pages/basic-infos';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Feed}/>
      <Route path="/registration0" component={BasicInfos}/>
      <Route path="/registration1" component={SeriousnessMap}/>
    </Router>
  );
}

export default App;
