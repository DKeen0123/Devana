import styled from 'styled-components';
import { pxToRem } from 'helpers/styling';

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${pxToRem(24)} ${pxToRem(16)} 0;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${pxToRem(8)};
`;

const CardWrapper = styled.div<{ width: number }>`
  width: ${(props) => pxToRem(props.width)};

  svg {
    border-radius: ${pxToRem(10)};
    margin-bottom: ${pxToRem(-10)};
  }
`;

export default {
  CardWrapper,
  HeadingWrapper,
  PriceWrapper,
};
