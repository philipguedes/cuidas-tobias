import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { EventPage } from './pages/event';
import { Feed } from './pages/feed';
import Registration from './pages/registration';
import { ProfessionalsPage } from './pages/professional';

function App() {
  return (
    <div className="app">

      <Router>
        <Route path="/registration" component={Registration} />
        <Route path="/" exact component={Feed} />
        <Route path="/eventos/:name" component={EventPage} />
        <Route path="/profissionais/:name" component={ProfessionalsPage} />
      </Router>
    </div>
  );
}

export default App;
