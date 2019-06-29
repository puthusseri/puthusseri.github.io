import {media} from 'utils/responsive-utils';
import {css} from 'styled-components';

export const mobileThoughts = (...args) => css`
  ${media.tablet`
    ${props => !props.isHome && css`
      ${css(...args)}
    `}
  `}
`;

export const mobileHome = (...args) => css`
  ${media.tablet`
    ${props => props.isHome && css`
      ${css(...args)}
    `}
  `}
`;