import styled from 'styled-components';
import { pxToRem } from 'helpers/styling';

const PriceWrapper = styled.div`
  padding: ${pxToRem(24)} ${pxToRem(24)} 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  PriceWrapper,
};
