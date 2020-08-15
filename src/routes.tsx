import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ExploreMore from './pages/ExploreMore';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/projects" component={ExploreMore} />
    </BrowserRouter>
  );
}

export default Routes;
