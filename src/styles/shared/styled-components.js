import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import {injectGlobal} from 'styled-components';
import {wrapperPadding} from 'styles/shared/properties';

export const UnderlinedLink = styled.a`
    color: white;
    text-decoration: none;
    ${props => props.href && `
      border-bottom: 1px dashed rgba(255, 255, 255, 0.6);
    `}
    padding-bottom: 1px;
`;

export const Section = styled.section`
   margin-bottom: 100px;
`;

export const SectionTitle = styled.h3`
  font-size: 35px;
  font-weight: 100;
  margin: 0 0 20px 0;
  color: white;
  font-weight: 300;
  padding-bottom: 5px;
  position: relative;

  &:before {
      content: "";
      width: 25px;
      height: 25px;
      border-radius: 100%;
      color: white;
      background-color: white;
      position: absolute;
      left: -85px;
      top: 7px;
      border: 5px solid #333959;
      
      ${media.phoneM`
        left: -45px;
      `}
  }

  &:first-of-type:before {
      top: -1px;
  }
  
  ${media.phoneM`
    font-size: 25px;
  `}
`;

export const ListItem = styled.li`
    font-size: 18px;
    list-style-type: none;
    margin: 10px 0;
    font-weight: 100;
    line-height: 25px;
`;

export const UnorderedList = styled.ul`
  padding: 0;
`;

export const RightSide = styled.div`
  padding-bottom:50px;
  
  ${props => injectGlobal`
    body {
      background-color: ${props.backgroundColor};
    }
  `}
`;

export const RightSideThoughts = styled(RightSide)`
  ${wrapperPadding}
`;

export const ContentMiddle = styled.div`
  margin: auto;
  max-width: 960px;
  width: 100%;
  ${props => props.styles}
`;