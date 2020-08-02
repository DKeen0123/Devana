import styled from 'styled-components';
import { pxToRem } from 'helpers/styling';

const Wrapper = styled.div`
  svg {
    circle {
      -webkit-transition: all 0.2s;
      -moz-transition: all 0.2s;
      -ms-transition: all 0.2s;
      -o-transition: all 0.2s;
      transition: all 0.2s;
    }
  }
`;

export default {
  Wrapper,
};
