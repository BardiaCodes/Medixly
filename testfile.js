import React from "react";
import { View, Text, StyleSheet } from "react-native";

<<<<<<< HEAD
const testFile = () => {
  return(
    <View>
      <Text style={styles.textStyle}>
        TestFile
=======
const testFile =  () => {
  return(
    <View>
      <Text style={styles.textStyle}>
        Test
>>>>>>> 2a0633587ad29b50ca098dab59111573ab62ad8a
      </Text>
    </View>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 55
=======
const styles = Stylesheet.create({
  textStyle: {
    fontSize: 20
>>>>>>> 2a0633587ad29b50ca098dab59111573ab62ad8a
  }
});

export default testFile;