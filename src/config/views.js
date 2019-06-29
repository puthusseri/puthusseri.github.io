import React from 'react';
import {Route} from 'mobx-router';
import {scrollBodyToTop} from 'utils/dom-utils';

//components
import Home from 'views/Home';
import ThoughtsPage from 'views/ThoughtsPage';
import ThoughtPage from 'views/ThoughtPage';
import FlatBird from 'views/FlatBird';

const paths = {
  home: new Route({
    id: 'home',
    component: <Home/>,
    path: '/',
    onEnter: () => {
      scrollBodyToTop();
    }
  }),
  thoughts: new Route({
    id: 'thoughts',
    component: <ThoughtsPage/>,
    path: '/thoughts/:tag?',
    onEnter: () => {
      scrollBodyToTop();
    }
  }),
  thought: new Route({
    id: 'thought',
    component: <ThoughtPage/>,
    path: '/thought/:slug',
    onEnter: () => {
      scrollBodyToTop();
    }
  }),
  flatbird: new Route({
    id: 'flatbird',
    component: <FlatBird/>,
    path: '/flatbird'
  })
};

export default paths;
