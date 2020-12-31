import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home';
import Verse from './pages/Verse';

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <div className='container mt-5 mx-auto'> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={Verse} />
      </Switch>
      {/* </div> */}
    </Router>
  );
};

export default App;
