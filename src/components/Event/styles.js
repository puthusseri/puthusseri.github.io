import styled from 'styled-components';
import {ListItem} from 'styles/shared/styled-components';

export const Wrapper = styled(ListItem)`
  ${props => props.finished && `
      color: white;
      opacity: 0.4;
  `}
`;