import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SimpleComponent from './SimpleComponent/SimpleComponent';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <SimpleComponent message="it's a message" />}
        />
      </Switch>
    </BrowserRouter>
  );
}
