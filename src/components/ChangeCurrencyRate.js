import React from "react";
import { connect } from "react-redux";
import { changeRate } from "../actions";

const ChangeCurrencyRate = ({ dispatch, state }) => {
  const changeRateValue = () => {
    dispatch(changeRate(+rateValue.value));
    rateValue.value = "";
  };

  let rateValue;
  return (
    <div className="currency-rate">
      <h3>
        Exchange rate <span className="important">{state.currencyRate}</span>
      </h3>
      <label htmlFor="changeRate">Change rate </label>
      <input name="changeRate" ref={node => (rateValue = node)} />
      <button className="btn" onClick={changeRateValue}>
        CHANGE
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps, null)(ChangeCurrencyRate);
