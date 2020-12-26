import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container mt-5 mx-auto'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
