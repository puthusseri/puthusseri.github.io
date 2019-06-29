import React from 'react';
import {UnderlinedLink} from 'styles/shared/styled-components';

const libraries = [
  {
    name: 'custom-react-scripts',
    link: 'https://www.npmjs.com/package/custom-react-scripts',
    description: <span>
      <span> explained better </span>
      <UnderlinedLink
        href="https://medium.com/@kitze/configure-create-react-app-without-ejecting-d8450e96196a"
        target="_blank"
      >
       in a Medium post.
    </UnderlinedLink>
      </span>
  },
  {
    name: 'mobx-router',
    link: 'https://github.com/kitze/mobx-router',
    description: 'simple, but fully functional router for React + MobX apps'
  },
  {
    name: 'GTB',
    link: 'https://github.com/kitze/gtb',
    description: 'Build tool for frontend apps with bunch of functionalities out of the box'
  },
  {
    name: 'stylz',
    link: 'https://github.com/kitze/stylz',
    description: 'helper library for JS styles'
  }
];

export default libraries;