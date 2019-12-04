import axios from "react-native-axios";

export const CHECK_FOR_USER = "CHECK_FOR_USER";
export const ADD_USER = "ADD_USER";

export const checkForUser = id => dispatch => {
  console.log("action" + id);
  axios({
    method: "post",
    url: "http://192.168.0.243:5000/users/findone",
    data: {
      deviceId: id
    }
  })
    .then(res => {
      if (res === undefined) {
        dispatch({
          type: CHECK_FOR_USER,
          payload: null
        });
      } else {
        dispatch({
          type: CHECK_FOR_USER,
          payload: res.data
        });
      }
    })
    .catch(err => console.error(err));
};
