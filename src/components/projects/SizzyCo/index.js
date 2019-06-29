import React from 'react';
import {UnderlinedLink} from 'styles/shared/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const SizzyCo = () => (
  <Project title="Sizzy" href="https://sizzy.co">
    <Point>
      A tool for testing responsive websites on multiple devices at once
    </Point>
    <Point>
      Launched it{' '}
      <UnderlinedLink
        href="https://medium.com/@kitze/introducing-sizzy-a-tool-for-developing-responsive-websites-crazy-fast-39a8c0061992"
        target="_blank"
      >
        in a day
      </UnderlinedLink>
    </Point>
  </Project>
);

export default SizzyCo;
