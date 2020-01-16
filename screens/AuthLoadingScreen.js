import React, { useEffect } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkForUser } from "../store/actions/users";

export default AuthLoadingScreen = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.userId);

  useEffect(() => {
    checkStorageForUser();
  }, []);

  const checkStorageForUser = async () => {
    try {
      // let user = await AsyncStorage.getItem("userId");
      let user = "5de60926aef9d53834d37b6f";
      dispatch(checkForUser(user));
      props.navigation.navigate(user ? "App" : "Auth");
    } catch (error) {
      console.error(error);
    }
  };

  //   useEffect(() => {
  //     props.navigation.navigate(user ? "App" : "Auth");
  //   }, [user]);

  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
