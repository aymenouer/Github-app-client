import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Repositories from './repositories';
export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
     
      <Repositories path="/" />
    </Router>
  );
}
