import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/colors";
import HomeScreen from "../screens/HomeScreen";
import TicketList from "../screens/TicketList";

const TicketNavigator = createStackNavigator(
  {
    Login: HomeScreen,
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

export default createAppContainer(TicketNavigator);
