import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SimpleComponent from './components/SimpleComponent';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SimpleComponent} />
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('app'),
);

