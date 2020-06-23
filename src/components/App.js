import React from "react";
import "../scss/main.scss";
import AddExchangeTask from "./AddExchangeTask";
import TransactionList from "./TransactionList";
import HighestTransaction from "./HighestTransaction";

function App() {
  return (
    <>
      <div className="app">
        <h1>My currency transactions</h1>
        <div className="wrapper">
          <div>
            <AddExchangeTask />
          </div>
          <div>
            <HighestTransaction />
          </div>
        </div>
        <TransactionList />
      </div>
    </>
  );
}

export default App;
