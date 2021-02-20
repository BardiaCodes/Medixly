import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function signInSignUp() {
  return (
    <View style={styles.container}>
    <Image style={styles.background} source={require('../assets/background.PNG')} />
      <Text style={styles.paragraph}>
          Medixly
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  paragraph: {
    fontSize: 60,
    fontWeight: 'bold',
    fontStyle: "Montserrat",
    textAlign: 'center',
  },
  
});
