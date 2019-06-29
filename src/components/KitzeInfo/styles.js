import styled from 'styled-components';
import flex from 'styles/flex';
import {mobileThoughts} from 'styles/scenarios';

export const Wrapper = styled.div`
  ${props => props.styles}
  
  ${flex.vertical}
  ${flex.centerVertical}
  
  ${mobileThoughts`
    margin:30px 0;
    ${flex.centerVerticalReset}
  `}
`;

export const Contact = styled.div`
  text-align:center;
`;

export const TitleAndDescription = styled.div`
  ${flex.vertical}
  
  ${mobileThoughts`
    margin-left: 15px;
  `}
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    object-position: 0 0;
    margin-top: 0px;
    border-radius: 100%;
    ${props => props.styles}
    ${mobileThoughts`
       width: 100px;
       height: 100px;
    `}
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 300;
    margin: 50px 0 0px 0;
    ${props => props.styles}
    ${mobileThoughts`
       margin:5px 0;
    `}
`;

export const Description = styled.h4`
    margin-top: 10px;
    font-weight: 100;
    font-size: 17px;
    ${props => props.styles}
    ${mobileThoughts`
       margin: 5px 0;
    `}
`;

export const ClickableTop = styled.div`
  ${flex.vertical}
  ${flex.centerVertical}
  cursor: ${props => props.isClickable ? 'pointer' : 'default'};
  
   ${mobileThoughts`
      margin-bottom:10px;
      ${flex.horizontal}
  `}
`;

export const IconList = styled.ul`
  padding: 0;
  margin:15px 0 0 0;
  ${flex.horizontal}
`;
