import PropTypes from 'prop-types';
import {
  TableTd,
  TableTh,
  TableTr,
  TransactionsBody,
  TransactionsRow,
  TransactionsTable,
} from './transactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  const tableElements = items.map(({ id, type, amount, currency }) => {
    return (
      <TransactionsRow key={id}>
        <TableTd>{type}</TableTd>
        <TableTd>{amount}</TableTd>
        <TableTd>{currency}</TableTd>
      </TransactionsRow>
    );
  });

  return (
    <TransactionsTable>
      <thead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </thead>

      <TransactionsBody>{tableElements}</TransactionsBody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
