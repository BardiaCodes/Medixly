import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Detect from "./App/Screens/Detect";
import Results from "./App/Screens/Results";
import PastResults from "./App/Screens/PastResults";
import React, {Component} from 'react';
import * as GoogleSignIn from 'expo-google-sign-in';
import { Button } from "react-native";

const navigator = createStackNavigator(
  {
    Detect: Detect,
    Results: Results,
    PastResults: PastResults,
  },
  {
    initialRouteName: "PastResults",
    defaultNavigationOptions: {
      title: "Detection App",
    },
  }
);

class LoadingScreen extends Component {
  render() {
    return (
      <View>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
  }
}
