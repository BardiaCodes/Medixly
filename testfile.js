import React from "react";
import { View, Text, StyleSheet } from "react-native";

const testFile =  () => {
  return(
    <View>
      <Text style={styles.textStyle}>
        Test
      </Text>
    </View>
  );
};

const styles = Stylesheet.create({
  textStyle: {
    fontSize: 20
  }
});

export default testFile;