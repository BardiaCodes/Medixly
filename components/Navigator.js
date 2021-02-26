import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import SigninScreen from "./SigninScreen";
import LoginScreen from "./LoginScreen";
import ButtonwithBackgroundScreen from "./ButtonWithBackgroundScreen";

const TabNavigator = createMaterialBottomTabNavigator(
  // Different screen navigations
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        ),
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: "Login",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"log-in-outline"}
            />
          </View>
        ),
      },
    },
  },
  // Styles of bottom tab navigator
  {
    initialRouteName: "Home",
    activeColor: "#0000ff",
    inactiveColor: "#d6efff",
    barStyle: { backgroundColor: "#42adf5" },
  }
);

export default createAppContainer(TabNavigator);
