import React from 'react';
import {Wrapper} from './styles';

const Event = ({allFinished, event:{date, name, talk, finished}}) => (
  <Wrapper finished={finished && !allFinished}>
    <span> {date} - </span>
    <b> {name} </b>
    <span> - {talk} </span>
  </Wrapper>
);

export default Event;