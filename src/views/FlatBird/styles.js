import styled from 'styled-components';
import {RightSideThoughts} from 'styles/shared/styled-components';
import flex from 'styles/flex';

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
  border-left: 1px solid #9c9c9c;
  padding-left: 50px;
`;

export const Circle = styled.div`
  border-radius: 100%;
  background-color: white;
  color: gray;
  font-size: 16px;
  min-height: 100px;
  width: 100px;
  height: 100px;
  min-width: 100px;
  font-weight: 600;
  text-align: center;
  margin-right: 20px;
  ${flex.horizontal}
  ${flex.centerHorizontal}
`;

export const Strong = styled.div`
  font-weight: 600;
  font-size: 40px;
  color: white;
  
  ${p => p.spaced? `
    margin-bottom: 100px;
  `: ''}
`;

export const Text = styled.div`
  color: white;
  margin-bottom: 20px;
`;

export const Horizontal = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
`;

export const HowAbout = styled.div`
  color: white;  
  margin-top: 30px;
`;

export const Download = styled.a`
  margin-top: 40px;
  background-color: rgba(255, 255, 255, 0.71);
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
  height: 100px;
  text-align: center;
  ${flex.horizontal}
  ${flex.centerHorizontal}
  transition: all 200ms linear;
  font-size: 20px;
  border: 4px solid white;
  color: #333959;
  font-weight: 600;
  text-decoration: none;
  margin-right: 20px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 100%;
  }
`;