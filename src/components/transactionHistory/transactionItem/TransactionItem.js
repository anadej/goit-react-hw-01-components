import React from "react";
import PropTypes from "prop-types";
import { TransactionItemStyled } from "./TransactionItemStyled";

const TransactionItem = ({ transaction }) => {
  return (
    <TransactionItemStyled>
      <td>
        {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
      </td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </TransactionItemStyled>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.object,
};
export default TransactionItem;
