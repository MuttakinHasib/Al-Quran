import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home';
import Verse from './pages/Verse';
import AutoScrollTop from './AutoScrollTop';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <AutoScrollTop />
      <Navbar />
      {/* <div className='container mt-5 mx-auto'> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={Verse} />
      </Switch>
      <ScrollToTop />
      {/* </div> */}
    </Router>
  );
};

export default App;
