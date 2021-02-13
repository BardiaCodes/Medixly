import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function signInSignUp() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/image3.png')} />
      <Text style={styles.paragraph}>
          Hello John Doe 
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  logo: {
    marginLeft: 185,
    height: 128,
    width: 128,
  },
  paragraph: {
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: "Montserrat",
    textAlign: 'center',
  },
  
});
