import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import * as Font from "expo-font";
import TicketList from "./screens/TicketList";

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      roboto: require("./assets/Roboto-Black.ttf")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TicketList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
