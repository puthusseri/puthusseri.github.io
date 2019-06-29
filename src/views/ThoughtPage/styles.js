import styled from 'styled-components';
import {media} from 'utils/responsive-utils';
import {RightSideThoughts} from 'styles/shared/styled-components';

export const RightSide = styled(RightSideThoughts)``;

export const Content = styled.div`
  font-family: 'Roboto', sans-serif !important;
  color: #5f5f5f;
  font-weight: 300;
  padding-bottom: 100px;
  line-height: 26px;
  font-size: 18px;
  font-weight: 300;
`;

export const Title = styled.h1`
  font-weight: 600;
  color: #4d5686;
  margin-top: 0;
  font-size: 33px;
  line-height: 40px;
  
  ${media.phablet`
    font-size: 25px;
    line-height: 35px;
  `}
`;

export const Top = styled.div`
  flex: 1;
`;