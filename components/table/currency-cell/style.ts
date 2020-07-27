import styled from 'styled-components';
import { pxToRem } from 'helpers/styling';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  height: ${pxToRem(30)};
  width: ${pxToRem(30)};
  border-radius: ${pxToRem(10)};
  margin-right: ${pxToRem(16)};
`;

export default {
  Icon,
  Wrapper,
};
