import React from "react";
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
import PastResultsBar from "./components/PastResultsBar";

const button_BACK = { uri: "https://imgur.com/2zC4NGP.png" }; // Back button
const bar_FILL = { uri: "https://imgur.com/Y7IFm2h.png" }; // Texture for filled part of bar
const bar_BG = { uri: "https://imgur.com/3byPAgm.png" }; // Texture for background part of bar (unfilled bar)
const BG = { uri: "https://imgur.com/TakQGCF.png" }; // Background image

const win = Dimensions.get("window");
const winWidth = win.width;
const winHeight = win.height;

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BG} style={styles.image}>
        <View style={styles.backView}>
          <TouchableOpacity
            onPress={() => alert("GOOOOOIN BACK!")}
            style={styles.TOstyle}
          >
            <Image source={button_BACK} style={styles.backButton} />
          </TouchableOpacity>
        </View>

        <View style={styles.barView}>
          <PastResultsBar />
          <PastResultsBar />
          <PastResultsBar />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "black",
  },
  backButton: {
    width: 110,
    height: 65,
    position: "absolute",
  },
  TOstyle: {
    margin: 10,
  },
  backView: {
    justifyContent: "flex-start",
    flex: 1,
  },
  barView: {
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 50,
  },
});

export default TestScreen;
