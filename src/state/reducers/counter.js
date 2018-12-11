import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '@/state/actions';

const counter = (state: any = 0, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
