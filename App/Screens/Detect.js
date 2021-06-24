import React from "react";
import { AsyncStorage } from 'react-native';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
 import Arrow from "../Components/BackButton";

 // async
 const photoDetect = async () => {
  try {
    await AsyncStorage.setItem(
      'Image',deteectimage);
  } catch (error) {
    alert(console.log)
    // Error saving data
  }
};

// Get the image through url (imgur)
const button_BACK = { uri: "https://imgur.com/2zC4NGP.png" };
const image = { uri: "https://i.imgur.com/NLwCJeA.png" };
const deteectimage = { uri: "https://i.imgur.com/ntJM5VX.png" };
const pastResultsButton = { uri: "https://i.imgur.com/fu1KbuH.png" };
function Detect(props) {
  return (
    //Safe area view for Iphone's, contains all the information

    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Arrow
          thickness={6}
          size={10}
          width={40}
          height={25}
          left={27}
          top={10}
          color="#418DFF"
        ></Arrow>

        <View style={styles.detectView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Button pressed") && photoDetect()}
          >
            <ImageBackground
              source={deteectimage}
              style={styles.imageD}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => alert("Button pressed")}
          >
            <ImageBackground
              source={pastResultsButton}
              style={styles.imageP}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const win = Dimensions.get("window");
const height = win.height;
const width = win.width;
const styles = StyleSheet.create({
  backView: {
    flex: 1,
    marginHorizontal: 1,
    marginVertical: 30,
  },
  detectView: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  TOstyle: {
    marginHorizontal: 20,
  },
  button: {
    justifyContent: "center",
    marginBottom: 60,
  },
  button2: {
    justifyContent: "center",
  },
  imageD: {
    aspectRatio: 1,
    width: 300,
    height: 300,
  },
  imageP: {
    width: 390,
    height: 160,
  },
});
export default Detect;

// arrow for increased customizability
