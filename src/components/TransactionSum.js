import React from "react";

const TransactionSum = ({ state }) => {
  const sum = state.currencyTransactions.reduce((acc, curr) => acc + curr.euroValue, 0);

  return (
    <><h4>Sum of all transactions:</h4>
      <p>{sum.toFixed(2)} €</p>
      <p>{(sum * state.currencyRate).toFixed(2) } PLN</p>
    </>
  );
};

export default TransactionSum;
