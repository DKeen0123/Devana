import styled from 'styled-components';
import { pxToRem } from 'helpers/styling';

const Wrapper = styled.div`
  svg {
    margin-bottom: ${pxToRem(-10)};
  }
`;

export default {
  Wrapper,
};
