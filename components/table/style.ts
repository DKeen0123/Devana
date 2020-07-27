import styled from 'styled-components';
import { pxToRem } from 'helpers/styling';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  * {
    color: #d8d8d8;
    text-align: left;
  }

  th,
  td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 8px;
  }
`;

const TableRow = styled.tr``;

const PercentageTd = styled.td<{ color: string }>`
  color: ${(props) => props.color};
`;

const TableWrapper = styled.div`
  margin: ${pxToRem(24)};
  padding: ${pxToRem(24)};
  border-radius: ${pxToRem(10)};
  background-color: #252d47;
`;

export default {
  PercentageTd,
  Table,
  TableRow,
  TableWrapper,
};
