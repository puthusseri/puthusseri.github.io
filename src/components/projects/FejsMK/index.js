import React from 'react';
import {UnderlinedLink} from 'styles/shared/styled-components';
import {Point} from 'components/Project/styles';
import Project from 'components/Project';

const FejsMK = () => (
  <Project
    title="fejs.mk">
    <Point>
      Local entertainment portal i made while i was in college.
    </Point>
    <Point>
      Did all the: code, design, marketing, and content
    </Point>
    <Point>
      Climbed to <b>#5</b> most visited Macedonian website in around a month.
    </Point>
    <Point>
      Got <UnderlinedLink href="https://www.facebook.com/fejsmk/" target="_blank">
      60.000 likes on Facebook
    </UnderlinedLink>
    </Point>
    <Point>
      Got millions of visits, then shut it down after a year ☠
    </Point>
  </Project>
);

export default FejsMK;