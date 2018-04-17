import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import SimpleComponent from './components/SimpleComponent.jsx';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/" component={SimpleComponent}/>
    </Switch>
  </BrowserRouter>
  ),
  document.getElementById('app')
);

