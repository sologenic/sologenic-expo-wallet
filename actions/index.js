export const getMarketData = () => {
  return {
    type: "GET_MARKET_DATA"
  };
};

export const getMarketDataSuccess = data => {
  return {
    type: "GET_MARKET_DATA_SUCCESS",
    payload: data
  };
};

export const getMarketDataError = data => {
  return {
    type: "GET_MARKET_DATA_ERROR",
    payload: data
  };
};

export const getMarketSevens = () => {
  return {
    type: "GET_MARKET_SEVENS"
  };
};

export const getMarketSevensSuccess = data => {
  return {
    type: "GET_MARKET_SEVENS_SUCCESS",
    payload: data
  };
};

export const getMarketSevensError = data => {
  return {
    type: "GET_MARKET_SEVENS_ERROR",
    payload: data
  };
};

export const updatePhraseTestValue1 = value => {
  return {
    type: "UPDATE_PHRASE_TEST_VALUE_1",
    value
  };
};

export const updatePhraseTestValue2 = value => {
  return {
    type: "UPDATE_PHRASE_TEST_VALUE_2",
    value
  };
};

export const updatePhraseTestValue3 = value => {
  return {
    type: "UPDATE_PHRASE_TEST_VALUE_3",
    value
  };
};

export const getBalance = (id, address) => {
  return {
    type: "GET_BALANCE",
    id,
    address,
  };
};

export const getBalanceSuccess = (id, data) => {
  return {
    type: "GET_BALANCE_SUCCESS",
    id,
    payload: data
  };
};

export const getBalanceError = data => {
  return {
    type: "GET_BALANCE_ERROR",
    payload: data
  };
};

export const postPaymentTransaction = (
  address,
  destinationAddress,
  amountValue,
  secret
) => {
  return {
    type: "POST_PAYMENT_TRANSACTION",
    address,
    secret,
    destinationAddress,
    amountValue
  };
};

export const postPaymentTransactionSuccess = data => {
  return {
    type: "POST_PAYMENT_TRANSACTION_SUCCESS",
    payload: data
  };
};

export const postPaymentTransactionError = data => {
  return {
    type: "POST_PAYMENT_TRANSACTION_ERROR",
    payload: data
  };
};

export const getListenToTransaction = account => {
  return {
    type: "GET_LISTEN_TO_TRANSACTION",
    account
  };
};

export const getListenToTransactionSuccess = data => {
  return {
    type: "GET_LISTEN_TO_TRANSACTION_SUCCESS",
    payload: data
  };
};

export const getListenToTransactionError = data => {
  return {
    type: "GET_LISTEN_TO_TRANSACTION_ERROR",
    payload: data
  };
};

export const connectToRippleApi = () => {
  return {
    type: "CONNECT_TO_RIPPLE_API"
  };
};

export const connectToRippleApiSuccess = () => {
  return {
    type: "CONNECT_TO_RIPPLE_API_SUCCESS"
  };
};

export const connectToRippleApiError = () => {
  return {
    type: "CONNECT_TO_RIPPLE_API_ERROR"
  };
};

export const generateNewWallet = newWallet => {
  return {
    type: "GENERATE_NEW_WALLET",
    newWallet
  };
};

export const addNewWallet = (
  newWallet,
  nickname,
  walletAddress,
  rippleClassicAddress
) => {
  return {
    type: "ADD_NEW_WALLET",
    newWallet,
    nickname,
    walletAddress,
    rippleClassicAddress
  };
};

export const saveNickname = nickname => {
  return {
    type: "SAVE_NICKNAME",
    nickname
  };
};

export const changeNickname = (id, nickname) => {
  return {
    type: "CHANGE_NICKNAME",
    nickname,
    id,
  };
};

export const deleteWallet = id => {
  return {
    type: "DELETE_WALLET",
    id,
  };
};
