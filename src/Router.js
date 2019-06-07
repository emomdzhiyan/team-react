import React, { memo, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Workspace from './components/Workspace';
import Invitation from './components/Invitation';

const Router = memo(() => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Workspace} />
      <Route path="/invitation/:token" component={Invitation} />
    </Switch>
  </Fragment>
));

export default Router;
