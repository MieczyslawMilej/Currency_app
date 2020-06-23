import React from "react";
import { connect } from "react-redux";
import { addTransaction } from "../actions";
import ChangeCurrencyRate from "./ChangeCurrencyRate";

const AddExchangeTask = ({ dispatch }) => {
  let transactionName;
  let euroValue;
  return (
    <div className="add-task">

        <ChangeCurrencyRate />
        <h3>Add new transaction</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!transactionName.value.trim() || !euroValue.value.trim()) {
            return;
          }
          dispatch(addTransaction(transactionName.value, +euroValue.value));
          transactionName.value = "";
          euroValue.value = "";
        }}
      >
        <div>
          <label>Transaction Name</label>
          <input ref={node => (transactionName = node)} />
        </div>
        <div>
          <label>Transaction Value in €</label>
          <input ref={node => (euroValue = node)} />
          <button type="submit" className="btn">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddExchangeTask);
