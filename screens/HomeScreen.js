import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import ButtonLg from "../components/ButtonLg";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo_filler.png")}
        style={{ flex: 3, width: "70%" }}
      />
      <View
        style={{
          flex: 2,
          justifyContent: "space-around",
          paddingVertical: 60
        }}
      >
        <ButtonLg title="Login" />
        <ButtonLg title="Register" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f4f4f4",
    paddingVertical: 25
  }
});
