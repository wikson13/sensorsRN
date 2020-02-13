export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const INCREMENT_COUNTER_REQUEST = 'INCREMENT_COUNTER_REQUEST';

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const incrementCounterAsync = () => {
  return {
    type: INCREMENT_COUNTER_REQUEST,
  };
};
