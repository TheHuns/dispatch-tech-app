import axios from "react-native-axios";

export const GET_TICKETS = "GET_TICKETS";

// export const getTickets = () => dispatch => {
//   axios
//     .get("/tickets")
//     .then(res =>
//       dispatch({
//         type: GET_TICKETS,
//         payload: res.data
//       })
//     )
//     .catch(err => console.error(err));
// };

export const getTickets = () => {
  return async dispatch => {
    const response = await fetch("http://192.168.0.243:5000/tickets");

    const resData = await response.json();
    dispatch({
      type: GET_TICKETS,
      payload: resData
    });
  };
};
