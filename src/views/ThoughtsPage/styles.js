import styled from 'styled-components';
import {RightSideThoughts} from 'styles/shared/styled-components';

export const Wrapper = styled.div``;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const Tags = styled.div`
  display:flex;
`;

export const Tag = styled.button`
  margin-right: 5px;
  outline: 0;
  font-weight: ${props => props.selected ? '600' : '100'}
`;

export const RightSide = styled(RightSideThoughts)`
  
`;