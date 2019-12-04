import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import TicketNavigation from "./navigation/TicketNavigation";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Constants from "expo-constants";

import ticketReducer from "./store/reducers/tickets";
import userReducer from "./store/reducers/users";

// SQLite in expo for database retrieval

// Redux store setup
const rootReducer = combineReducers({
  tickets: ticketReducer,
  users: userReducer
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-imp": require("./assets/Roboto-Black.ttf")
  });
};

const device_id = Constants.deviceId;

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  // useEffect(() => {
  //   console.log(device_id);
  // });

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <TicketNavigation />
    </Provider>
  );
};

export default App;
