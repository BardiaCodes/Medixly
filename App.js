import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Detect from "./App/Screens/Detect";
import Results from "./App/Screens/Results";
import PastResults from "./App/Screens/PastResults";
import firebase from 'firebase/app';
import { firebaseConfig } from "./config";
import React, {Component} from 'react';
import * as GoogleSignIn from 'expo-google-sign-in';
import { Button } from "react-native";

firebase.initializeApp(firebaseConfig);
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
const AppNavigator = createAppContainer(navigator);

class LoadingScreen extends Component {
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        //androidClientId: YOUR_CLIENT_ID_HERE,
        behavior: "web",
        iosClientId:
          "823887287984-b4s258gu72inqefe5mplcessk492364u.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          this.props.navigation.navigate("Detect");
        } else {
          this.props.navigation.navigate("LoginScreen");
        }
      }.bind(this)
    );
  };
  render() {
    return (
      <View>
        <Button
          title="Sign In WIth Google"
          onPress={() => this.signInWithGoogleAsync()}
        />
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
