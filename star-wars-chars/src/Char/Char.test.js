import React from 'react';
import ReactDOM from 'react-dom';

import Char from './Char';
import { BrowserRouter as Router } from "react-router-dom";

import { render, unmountComponentAtNode } from 'react-dom';
import { Route, Link, MemoryRouter } from 'react-router-dom';
import { Simulate } from 'react-addons-test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const index = 3;
  const component = (
    <Router>
      <Route path="/character/3" component={Char} />
    </Router>
  );

  ReactDOM.render(component, div);
  ReactDOM.unmountComponentAtNode(div);
});
