import React from 'react';
import {Route, Switch} from 'react-router-dom';

import LandingPage from './landing_page/LandingPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
