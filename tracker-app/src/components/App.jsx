import React from 'react';
import {Route, Switch} from 'react-router-dom';

import LandingPage from './landing_page/LandingPage';
import UserDasboard from './dashboard/UserDasboard';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/users/tasks/:id" component={UserDasboard} />
      </Switch>
    </div>
  );
}

export default App;
