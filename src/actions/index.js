export const addTransaction = (name, euroValue) => ({
  type: "ADD_TRANSACTION",
  euroValue,
  name
});

export const changeRate = number => ({
  type: "CHANGE_RATE",
  number
});

export const deleteTransaction = id => ({
  type: "DELETE_TRANSACTION",
  id
});

export const showInput = () => ({
  type: "SHOW_CURRENCY_INPUT"
});
