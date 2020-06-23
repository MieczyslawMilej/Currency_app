import React from "react";
import { connect } from "react-redux";
import { deleteTransaction } from "../actions";

const TransactionItem = ({ transaction, currencyRate, dispatch }) => {
  return (
    <>
      <li className="transaction-item">
        <p>{transaction.name}</p>
        <p>{transaction.euroValue} €</p>
        <p>{(transaction.euroValue * currencyRate).toFixed(2)} PLN</p>
        <button className="btn delete" onClick={() => dispatch(deleteTransaction(transaction.id))}>
          <span role="img" aria-label="x">
            ❌
          </span>
        </button>
      </li>
    </>
  );
};

export default connect()(TransactionItem);
