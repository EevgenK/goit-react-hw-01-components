import styled from 'styled-components';
export const TransactionsTable = styled.table`
  width: 70vh;
  border-collapse: collapse;
  background-color: white;

  border-radius: 8px;
  text-align: center;
  box-shadow: rgba(218, 155, 40, 0.35) 0px 5px 15px;
`;
export const TransactionsBody = styled.tbody`
  background-color: white;
`;

export const TransactionsRow = styled.tr`
  color: grey;
  font-size: 18px;

  &:nth-child(even) {
    background-color: lightyellow;
  }
`;
export const TableTr = styled.tr`
  background-color: orange;
`;
export const TableTh = styled.th`
  text-transform: uppercase;
  font-size: 20px;
  padding: 10px;
  color: white;
  font-weight: 400;
  border-bottom: 1px solid white;
  &:first-child {
    border-radius: 8px 0 0 0;
    border-right: 1px solid white;
  }
  &:last-child {
    border-radius: 0 8px 0 0;
    border-left: 1px solid white;
  }
`;
export const TableTd = styled.td`
  padding: 6px;
  text-transform: capitalize;
  &:first-child {
    border-right: 1px solid lightyellow;
    border-radius: 0 0 0 8px;
  }
  &:last-child {
    border-left: 1px solid lightyellow;
    border-radius: 0 0 8px 0;
  }
`;
