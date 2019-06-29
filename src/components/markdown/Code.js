import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
    padding: 3px 5px;
    background-color: #ececec;
    font-size: 14px;
`;

const CodeComponent = ({language, code}) => {
  return <Code language={language}>{code}</Code>;
}

export default CodeComponent;