import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Feed } from './pages/feed';
import { SeriousnessMap } from './pages/seriousness-map';
import { BasicInfos } from './pages/basic-infos';
import Registration from './pages/registration';

function App() {
  return (
    <div className="app">

      <Router>
        <Route path="/" exact component={Feed} />
        <Route path="/registration" component={Registration} />
        <Route path="/registration0" component={BasicInfos} />
        <Route path="/registration1" component={SeriousnessMap} />
      </Router>
    </div>
  );
}

export default App;
