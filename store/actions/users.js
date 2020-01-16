import axios from "react-native-axios";

export const CHECK_FOR_USER = "CHECK_FOR_USER";
export const ADD_USER = "ADD_USER";

export const checkForUser = id => dispatch => {
  axios({
    method: "post",
    url: "http://192.168.0.243:5000/users/findone",
    data: {
      id
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

export const addUser = user => dispatch => {
  axios({
    method: "post",
    url: "http://192.168.0.243:5000/users/",
    data: {
      name: user.name,
      password: user.password
    }
  }).then(res =>
    dispatch({
      type: ADD_USER,
      payload: res.user
    })
  );
};
