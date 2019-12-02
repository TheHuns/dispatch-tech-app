import { GET_TICKETS } from "../actions/tickets";

const initialState = {
  tickets: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TICKETS:
      return { ...state, tickets: payload };

    default:
      return state;
  }
};
