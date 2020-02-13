import * as actions from './counterActions';

const initialState = {
  counter: 1,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER:
      return {
        counter: state.counter + 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
