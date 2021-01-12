import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import AutoScrollTop from './AutoScrollTop';
import ScrollToTop from './components/ScrollToTop';
import './App.scss';
import Spinner from './components/Spinner/Spinner';

const Home = lazy(() => import('./pages/Home'));
const Verse = lazy(() => import('./pages/Verse'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <AutoScrollTop />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={Verse} />
        </Switch>
        <ScrollToTop />
      </Suspense>
    </Router>
  );
};

export default App;
