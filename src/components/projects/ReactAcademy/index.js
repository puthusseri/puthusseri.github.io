import React from 'react';
import {UnderlinedLink} from 'styles/shared/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const ReactAcademy = () => (
  <Project
    title="React Academy"
    href="https://reactacademy.io"
  >
    <Point>
      React and JavaScript on-site workshops
    </Point>
    <Point>
      Public workshops, company workshops, conference workshops
    </Point>
    <Point>
      Collaborated with a lot of conferences and companies across Europe
    </Point>
  </Project>
);

export default ReactAcademy;