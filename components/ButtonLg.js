import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../constants/colors";

export default function ButtonLg({ title }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    width: 250,
    borderColor: "#dd5735",
    borderWidth: 1,
    borderRadius: 35,
    alignItems: "center",
    backgroundColor: Colors.primary
  },
  text: {
    fontWeight: "600",
    color: "white",
    fontSize: 18
  }
});
