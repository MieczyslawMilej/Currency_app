const initialValue = {
  currencyRate: 4.44,
  currencyTransactions: [
    {
      name: "First transaction",
      euroValue: 4,
      id: 0
    },
    {
      name: "Second transaction",
      euroValue: 130.3,
      id: 1
    }
  ]
};

const currencyApp = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        currencyTransactions: [
          ...state.currencyTransactions,
          {
            name: action.name,
            euroValue: action.euroValue,
            id:
              state.currencyTransactions.reduce(
                (maxId, transaction) => Math.max(transaction.id, maxId),
                -1
              ) + 1
          }
        ]
      };
    case "CHANGE_RATE":
      return { ...state, currencyRate: action.number };

    case "DELETE_TRANSACTION":
       const filteredTransactions = state.currencyTransactions.filter(
        transaction => transaction.id !== action.id
      );
      return {...state, currencyTransactions: filteredTransactions};
    default:
      return state;
  }
};

export default currencyApp;
