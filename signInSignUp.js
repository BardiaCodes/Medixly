import * as React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function signInSignUp() {
  return (
    <View style={styles.container}>
    <Image style={styles.background} source={require('../assets/background.PNG')} />
      <Text style={styles.paragraph}>
          Medixly
      </Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <view style={{ width: 200, height: 70, }}></view>
      </TouchableHighlight>
      
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
