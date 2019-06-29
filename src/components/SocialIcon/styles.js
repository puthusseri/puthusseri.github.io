import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import {ListItem} from 'styles/shared/styled-components';
import {mobileThoughts} from 'styles/scenarios';

export const Icon = styled.div`
    font-size: 22px;
    opacity: 0.6;
    transition: all 100ms linear;
    margin-bottom: 15px;
    color: white;
    
    &:hover {
      opacity:1;
    }
    
    ${media.phoneM`
      font-size: 24px;
      margin: 0 2px;
    `}
    
    ${media.phoneS`
      font-size: 20px;
      margin: 0 2px;
    `}
    
    ${props => props.styles}
`;

export const Link = styled.a`
  border-bottom: 0;
`;

export const Wrapper = styled(ListItem)`
    display: inline-block;
    margin: 0 10px;
    
    ${mobileThoughts`
      &:first-child {
        margin-left: 0;
      }
    `}
`;