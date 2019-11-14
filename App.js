import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import TicketNavigation from "./navigation/TicketNavigation";

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-imp": require("./assets/Roboto-Black.ttf")
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

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

  return <TicketNavigation />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
