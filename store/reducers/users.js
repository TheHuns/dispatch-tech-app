import { CHECK_FOR_USER } from "../actions/users";

const initialState = {
  deviceId: null,
  userId: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_FOR_USER:
      console.log("reducer " + payload);
      return { ...state, userId: payload };
    // return { ...state, userId:payload }

    default:
      return state;
  }
};
