import React from "react";
import { View, Text, StyleSheet } from "react-native";

const testFile = () => {
  return(
    <View>
      <Text style={styles.textStyle}>
        TestFile
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 55
  }
});

export default testFile;