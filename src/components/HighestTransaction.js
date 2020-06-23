import React from "react";
import { connect } from "react-redux";
import TransactionSum from "./TransactionSum";

const HighestTransaction = ({ state }) => {
  const highest = state.currencyTransactions.reduce((acc, curr) => {
    return acc.euroValue > curr.euroValue ? acc : curr;
  }, 0);

  if (highest === 0) {
    return null;
  }

  return (
    <div className="highest-transaction-wrapper">
      <h4>Highest transaction: </h4>
      <p>{highest.name}</p>
      <p>{+(highest.euroValue * state.currencyRate).toFixed(2)} PLN</p>
      <p> {highest.euroValue.toFixed(2)} €</p>

      <TransactionSum state={state} />
    </div>
  );
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps, {})(HighestTransaction);
