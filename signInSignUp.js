import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function signInSignUp() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/background.PNG')} />
      <Text style={styles.paragraph}>
          Medixly
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 15,
  },
  paragraph: {
    fontSize: 60,
    fontWeight: 'bold',
    fontStyle: "Montserrat",
    textAlign: 'center',
  },
  
});
