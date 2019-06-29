import React from 'react';
import {Wrapper, Link, Title, Points} from './styles';

const Project = ({title, href, children}) => (
  <Wrapper>
    <Link target="_blank" href={href}>
      <Title>{title}</Title>
    </Link>
    <Points>
      {children}
    </Points>
  </Wrapper>
);

export default Project;