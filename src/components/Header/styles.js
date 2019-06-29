import styled from 'styled-components';
import flex from 'styles/flex';
import sizes from 'styles/sizes';

export const Wrapper = styled.div`
  transition: background-color 200ms linear;
  padding: 10px;
  height: ${sizes.header.height}px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  ${props => props.styles}
`;

export const Link = styled.div`
  transition: opacity 200ms linear;
  color: white;
  cursor: pointer;
  opacity: 0.8;
  
  ${props => props.isActive && `
    opacity: 1;
    font-weight: bold;
  `}
  
  &:hover{
    opacity: 1;
  }
  
  &:after{
    content: '/';
    margin: 0 30px;
  }
  
  &:last-child:after{
    display:none;
  }
`;

export const childStyles = {
  ContentMiddle: `
    ${flex.horizontal}
    ${flex.centerHorizontal}
    ${flex.wrap}
    height: 100%;
  `
}