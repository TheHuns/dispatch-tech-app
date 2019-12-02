import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useDispatch } from "react-redux";

import ButtonLg from "../components/ButtonLg";
import Colors from "../constants/colors";
import { getTickets } from "../store/actions/tickets";

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getTickets());
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.overlay}>
          <View style={styles.logo}>
            <Text style={styles.textDark}>dispatch</Text>
            <Text style={styles.textPrimary}>a</Text>
            <Text style={styles.textDark}>tech</Text>
          </View>
        </View>
        <Image
          source={require("../assets/home-showcase.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.actions}>
        <ButtonLg title="Login" />
        <ButtonLg title="Register" />
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerTitle: "Dashboard"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f4f4f4"
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch"
  },
  imageContainer: {
    height: "60%",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden"
  },
  actions: {
    justifyContent: "space-around",
    height: "40%",
    paddingVertical: 30
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(200, 200, 200, 0.7)",
    zIndex: 2
  },
  logo: {
    flexDirection: "row",
    marginTop: 25,
    marginHorizontal: "20%",
    width: "60%",
    justifyContent: "center"
  },
  textDark: {
    fontSize: 29,
    color: "#444",
    fontWeight: "bold",
    fontFamily: "roboto-imp"
  },
  textPrimary: {
    fontSize: 30,
    color: Colors.primary,
    fontWeight: "bold"
  }
});
