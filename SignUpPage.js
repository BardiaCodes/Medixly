import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";

// subtext style is the name, email, and password outside the buttons.
// subtext2 style is the name, email, and password examples inside the buttons.

export default function App() {
  //States
  const [email, setEmail] = useState("example@gmail.com");
  const [password, setPassword] = useState("9+ Characters");
  const [name, setName] = useState("eg. John Doe");

  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/background.png")}
    >
      <View style={styles.heading}>
        <Text style={styles.SignupHeader}>Sign Up</Text>
      </View>

      <View>
        <Text style={styles.subtext}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. John Doe"
          onSelectionChange={(val) => setName(val)}
        />
      </View>

      <View>
        <Text style={styles.subtext}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          onSelectionChange={(val) => setName(val)}
        />
      </View>

      <View>
        <Text style={styles.subtext}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="9+ Characters"
          onSelectionChange={(val) => setName(val)}
        />
      </View>

      <View style={styles.space}></View>

      <View>
        <View style={styles.signup}>
          <Text style={styles.SignUpButton}>Sign Up</Text>
        </View>
      </View>

      <View style={styles.space2}></View>

      <View style={styles.placeholder}>
        <Text style={styles.smalltext}>Already have an account?</Text>
        <View style={styles.signin}>
          <Text style={styles.SignInButton}>Sign In</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeholder: {
    bottom: 20,
    backgroundColor: "#fff",
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  heading: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  input: {
    backgroundColor: "#dcdcdc",
    borderColor: "#777",
    padding: 20,
    fontSize: 20,
    width: 350,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  signup: {
    backgroundColor: "#418dff",
    width: 350,
    height: 95,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    bottom: 15,
  },
  signin: {
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c4c4c4",
    width: 230,
    height: 50,
    borderColor: "#e1e1e1",
    borderWidth: 3,
    right: 20,
  },
  SignupHeader: {
    top: 30,
    left: 30,
    fontSize: 70,
    fontWeight: "bold",
    color: "#418dff",
    textShadowColor: "#808080",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 3,

    // fontStyle: "Montseratt",
  },
  subtext: {
    fontSize: 20,
    color: "#000000",
    // fontStyle: "Questrial",
    left: 10,
  },
  subtext2: {
    fontSize: 20,
    color: "#000000",
    // fontStyle: "Questrial",
    opacity: 56,
  },
  smalltext: {
    fontSize: 15,
    color: "#7c7c7c",
    // fontStyle: "Questrial",
    alignSelf: "flex-start",
    bottom: 25,
    left: 35,
  },
  SignUpButton: {
    fontSize: 30,
    color: "#fff",
    // fontStyle: "Montseratt",
    fontWeight: "500",
  },
  SignInButton: {
    fontSize: 20,
    color: "#000",
    // fontStyle: "Montserrat",
    fontWeight: "500",
  },
  space2: {
    height: 20,
  },
});
