import styled from 'styled-components';
import { pxToRem } from 'helpers/styling';

export const Text = styled.p`
  color: white;
  font-size: ${pxToRem(16)};
`;

export const H1 = styled.h1`
  color: white;
  font-size: ${pxToRem(48)};
`;
