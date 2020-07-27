import styled from 'styled-components';

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

const TableRow = styled.tr`
  /* border-bottom: 1px white solid; */
`;

export default {
  Table,
  TableRow,
};
