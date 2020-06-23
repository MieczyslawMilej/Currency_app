import React from "react";
import { connect } from "react-redux";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ state }) => {

  return (
    <>
      <ul>
        {state.currencyTransactions.map(transaction => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            currencyRate={state.currencyRate}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps, {})(TransactionList);
