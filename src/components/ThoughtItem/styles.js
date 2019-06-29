import styled from 'styled-components';
import flex from 'styles/flex';
import {Link as $Link} from 'mobx-router';

export const ListItem = styled.li`
  ${flex.horizontal};
  margin-top: 0;
  margin-bottom: 25px;
`;

export const Link = styled($Link)`
  flex: 1;
  transition: all 200ms linear;
  display:block;
  color: gray;
  text-decoration: none !important;
  padding: 0;
  
  &:hover h3{
    color: #424c54;
  }
  
  &:hover div{
    color: #2e373e;
  }
`;

export const DateTime = styled.div`
  transition: color 100ms linear;
  font-size: 13px;
  font-weight: 300;
  margin-top: 5px;
  color: #9c9c9c;
`;

export const Title = styled.h3`
  transition: all 100ms linear;
  margin: 0 0 8px 0;
  color: #57626b;
  font-weight: 300;
  line-height: 25px;
`;

export const TagList = styled.ul`
  ${flex.horizontal};
  padding: 0;
  list-style-type: none;
  margin: 8px 0;
`;

export const Tag = styled.li`
  font-size: 12px;
  background-color: #8189b3;
  color: white;
  border-radius: 3px;
  padding: 2px 6px;
  margin-right: 5px;
`;
