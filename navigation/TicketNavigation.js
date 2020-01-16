import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import TicketList from "../screens/TicketList";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";

const TicketNavigator = createStackNavigator(
  {
    Tickets: TicketList
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTitleStyle: {
        fontFamily: "roboto-imp"
      },
      headerBackTitleStyle: {
        fontFamily: "roboto-imp"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

const AuthStack = createStackNavigator({ SignIn: HomeScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: TicketNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
