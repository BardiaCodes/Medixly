import * as React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

export default function signInSignUp() {
  console.log("App executed");
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require('./assets/background.png')} />
      <Text style={styles.title}>
        Medixly
      </Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper. Fermentum dui faucibus in ornare. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. (filler text)
      </Text>
      <TouchableHighlight onPress={() => console.log("Button tapped")}>
        <View style={{width: 220, height: 40, backgroundColor: "#ededed", borderRadius: 30, marginTop: 50}}>
          <Text style={styles.button}>
            Sign In
          </Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.smolText}>
        Already have an account? Sign in!
      </Text>
      <TouchableHighlight onPress={() => console.log("Button tapped")}>
        <View style={{width: 220, height: 40, backgroundColor: "#ededed", borderRadius: 30, marginTop: 50}}>
          <Text style={styles.button}>
            Sign Up
          </Text>
        </View>
      </TouchableHighlight>
      

      <Text style={styles.smolText}>
        Don't have an account yet? Sign up!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: 'bold',
  },
  background: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    alignContent: 'center',
    position: "absolute",
  },
  paragraph: {
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    marginLeft: 45,
    marginRight: 45,
    marginTop: 60,
  },
  smolText: {
    color: "#cccccc",
    fontSize: 13,
    marginTop: 10,
  },
  title: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 75,
  },
  
});