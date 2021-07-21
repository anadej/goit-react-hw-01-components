import React from "react";
import PropTypes from "prop-types";
import { TransactionHistoryStyled } from "./TransactionHistoryStyled";
import TransactionItem from "./transactionItem/TransactionItem";

const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryStyled>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
    </TransactionHistoryStyled>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};

export default TransactionHistory;
