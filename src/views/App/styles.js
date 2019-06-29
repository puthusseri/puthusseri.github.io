import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import sizes from 'styles/sizes';
import flex from 'styles/flex';
import {wrapperPadding} from 'styles/shared/properties';
import {mobileThoughts, mobileHome} from 'styles/scenarios';

export const childStyles = {
  KitzeInfo: {
    home: {
      Wrapper: `
        color: white;
      `
    },
    other: {
      Title: `
        color: #848484;
      `,
      Description: `
        color: gray
      `,
      SocialIcon: {
        Icon: `
          color: gray;
        `
      },
      Image: `
        box-shadow: 0 0 9px 1px rgba(49, 49, 49, 0.17);
      `
    }
  },
  Header: {
    home: {
      Wrapper: `
        background-color: #2b304c;
      `
    },
    other: {
      Wrapper: `
        background-color: #333959;
      `
    }
  }
};

export const Wrapper = styled.div`
  position: relative;
  padding-top: ${sizes.header.height + 30}px;

  ${mobileThoughts`
    padding-top: ${sizes.header.height}px;
  `}
`;

export const Sides = styled.div`
    display: flex;
    flex-direction: row;
    
    ${media.tablet`
      flex-direction: column;
    `}
`;

export const LeftSide = styled.div`
    width: auto;
    min-width: 300px;
    min-height: calc(100vh - ${sizes.header.height}px);
    
    
    ${media.tablet`
        min-width: 0;
        width: 100%;
    `}
    
    ${mobileHome`
      ${flex.vertical};
      ${flex.centerVertical};
    `}
    
    ${mobileThoughts`
        padding-right: 0;
        padding-top: 0;
        ${flex.centerVerticalReset}
        ${flex.horizontal}
        ${flex.centerHorizontalV}
        ${wrapperPadding}
        min-height: 0;
    `}
`;