import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ButtonLg from "../components/ButtonLg";
import Colors from "../constants/colors";
import { getTickets } from "../store/actions/tickets";
import { checkForUser, addUser } from "../store/actions/users";
import Constants from "expo-constants";
import t from "tcomb-form-native";

let Form = t.form.Form;

let User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});

export default class HomeScreen extends React.Component {
  // Form setup

  _addUser = () => {};

  _onSubmit = () => {
    let value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    } else {
      console.log("no value found");
    }
  };

  render() {
    const renderForm = () => (
      <View style={styles.actions}>
        <Form type={User} ref="form" />
        <ButtonLg
          title="Register"
          onPress={() => {
            this._onSubmit();
          }}
        />
      </View>
    );
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
        {renderForm()}
      </View>
    );
  }
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
    height: "25%",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden"
  },
  actions: {
    justifyContent: "space-around",
    height: "75%",
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
