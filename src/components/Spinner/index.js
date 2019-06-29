import styled, {keyframes} from 'styled-components';

const load3 = keyframes`
    0% {
      transform: rotate(0deg);
    }
    
    100% {
      transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  font-size: 10px;
  text-indent: -9999em;
  width: ${props => props.size || '11em'};
  height: ${props => props.size || '11em'};
  border-radius: 50%;
  background: ${props => props.backgroundColor};
  background: linear-gradient(to right, ${props => props.backgroundColor} 10%, rgba(187,255,248, 0) 42%);
  position: relative;
  animation: ${load3} ${props => `${props.speed || 1.4}s`} infinite linear;
  transform: translateZ(0);
  
  &:before {
    width: 50%;
    height: 50%;
    background: ${props => props.backgroundColor};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  
  &:after {
    background: ${props => props.color};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export default Spinner;