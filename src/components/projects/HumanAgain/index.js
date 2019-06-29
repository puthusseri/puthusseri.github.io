import React from 'react';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const HumanAgain = () => (
  <Project
    title="Human Again"
    href="http://humanagain.co"
  >
    <Point>
      Platform for easy subscribing and managing donations to charities
    </Point>
    <Point>
      Built in 1 day at Startup Weekend Utrecht
    </Point>
    <Point>
      Still a work in progress
    </Point>
    <Point>
      Responsive mobile design + integration of Paypal
    </Point>
  </Project>
);

export default HumanAgain;