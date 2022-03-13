import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Repositories from './repositories';
import Star from './star';
import Repos from './repos';
import Repo from './repo';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}> 
      <Repositories path="/" />
      <Star path="/stars" />
      <Repos path="/repositories" />
      <Repo path="/repo-detail" />
    </Router>
  );
}
