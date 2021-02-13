import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';

const button_BACK = { uri: "https://imgur.com/2zC4NGP.png" } // Back button
const bar_FILL = { uri: "https://imgur.com/Y7IFm2h.png" } // Texture for filled part of bar
const bar_BG = { uri: "https://imgur.com/3byPAgm.png" } // Texture for background part of bar (unfilled bar)
const BG = { uri: "https://imgur.com/TakQGCF.png" } // Background image

const win = Dimensions.get('window');
const winWidth = win.width;
const winHeight = win.height;

const TestScreen = () => {
  return(
    <View style={styles.container}>

      <ImageBackground source={BG} style={styles.image}>

        <TouchableOpacity   
          onPress={() => console.log(win.height)} 
          style={styles.TOstyle}
        >
          <Image 
            source = { button_BACK }
            style = {styles.backButton}
          />
        </TouchableOpacity>

      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "black"
  },
  backButton: {
    width: 100,
    height: 50,
    position: "absolute"
  },
  TOstyle: {
    top: -390, 
    right: 5
  }
});

export default TestScreen;