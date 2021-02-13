import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function signInSignUp() {
  return (
    <View style={styles.container}>
    //<Image style={styles.logo} source={require('-')} />
      <Text style={styles.paragraph}>
          Medixly
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  paragraph: {
    fontSize: 60,
    fontWeight: 'bold',
    fontStyle: "Montserrat",
    textAlign: 'center',
  },
  
});
