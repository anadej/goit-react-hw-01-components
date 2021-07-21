import React from "react";
import { TransactionHistoryStyled } from "./TransactionHistoryStyled";
import TransactionItem from "./transactionItem/TransactionItem";

const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryStyled>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <TransactionItem transaction={transaction} id={transaction.id} />
          ))}
        </tbody>
      </table>
    </TransactionHistoryStyled>
  );
};

export default TransactionHistory;
