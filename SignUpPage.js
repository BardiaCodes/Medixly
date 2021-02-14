import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// subtext style is the name, email, and password outside the buttons.
// subtext2 style is the name, email, and password examples inside the buttons.

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.SignupHeader}>Sign Up</Text>
      </View>

      <View>
        <Text style={styles.subtext}>Name</Text>
        <View style={styles.filler}>
          <Text style={styles.subtext2}>eg. John Doe</Text>
        </View>
      </View>

      <View>
        <Text style={styles.subtext}>Email</Text>
        <View style={styles.filler}>
          <Text style={styles.subtext2}>example@gmail.com</Text>
        </View>
      </View>

      <View>
        <Text style={styles.subtext}>Password</Text>
        <View style={styles.filler}>
          <Text style={styles.subtext2}>9+ Characters</Text>
        </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  heading: {
    flex: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  filler: {
    backgroundColor: "#dcdcdc",
    width: 350,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  signup: {
    backgroundColor: "#418dff",
    width: 350,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
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
  },
  SignupHeader: {
    top: 30,
    fontSize: 50,
    fontWeight: "bold",
    color: "#418dff",
    fontStyle: "Montseratt",
  },
  subtext: {
    fontSize: 20,
    color: "#000000",
    fontStyle: "Questrial",
    left: 10,
  },
  subtext2: {
    fontSize: 20,
    color: "#000000",
    fontStyle: "Questrial",
    opacity: 56,
  },
  smalltext: {
    fontSize: 15,
    color: "#7c7c7c",
    fontStyle: "Questrial",
    alignSelf: "flex-start",
  },
  SignUpButton: {
    fontSize: 25,
    color: "#fff",
    fontStyle: "Montseratt",
    fontWeight: "500",
  },
  SignInButton: {
    fontSize: 20,
    color: "#000",
    fontStyle: "Montserrat",
    fontWeight: "500",
  },
  space: {
    height: 40,
  },
  space2: {
    height: 10,
  },
});
