import React from 'react';
import styled from 'styled-components';
import colors from 'config/colors';

const Link = styled.a`
    color: ${colors.accent};
    text-decoration: none;
    border-bottom: 1px dashed ${colors.accent};
    padding-bottom: 2px;
`;

const LinkComponent = ({href, children}) => {
  return <Link href={href}>{children}</Link>;
}

export default LinkComponent;