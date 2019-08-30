import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { BasicInfos } from './pages/basic-infos';
import { EventPage } from './pages/event';
import { Feed } from './pages/feed';
import Registration from './pages/registration';
import { SeriousnessMap } from './pages/seriousness-map';

function App() {
  return (
    <div className="app">

      <Router>
        <Route path="/" exact component={Feed} />
        <Route path="/registration" component={Registration} />
        <Route path="/registration0" component={BasicInfos} />
        <Route path="/registration1" component={SeriousnessMap} />
        <Route path="/eventos/:name" component={EventPage} />
      </Router>
    </div>
  );
}

export default App;
