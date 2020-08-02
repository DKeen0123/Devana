import styled from 'styled-components';
import { pxToRem } from 'helpers/styling';
import { CardWrapperProps } from './types';

const CardWrapper = styled.div<CardWrapperProps>`
  border-radius: ${pxToRem(10)};
  background-color: ${(props) =>
    props.theme.colors[props.backgroundColor][props.backgroundTone]};
`;

export default {
  CardWrapper,
};
