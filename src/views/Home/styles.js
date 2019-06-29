import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import {RightSide} from 'styles/shared/styled-components';

export const RightSideHome = styled(RightSide)`
    color: white;
    border-left: 5px solid rgba(255, 255, 255, 0.5);
    padding-left: 70px;
    margin-left: 20px;
    position:relative;
    
    ${media.phoneM`
      padding-left: 30px;
    `}
`;

export const ShowMoreButton = styled.button`
    background-color: rgba(255, 255, 255, 0.16);
    transition: all 200ms linear;
    border: 0;
    cursor: pointer;
    border-radius: 3px;
    color: white;
    font-weight: 100;
    padding: 10px 15px;
    font-size: 15px;
    border: 1px solid rgba(255, 255, 255, 0.69);
    margin-top: 50px;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
`;