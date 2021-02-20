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
// Get the image through url (imgur)
const aPercent = 50; // Asymetry percentage
const bPercent = 20; // Border percentage
const cPercent = 16; // Color percentage
const dPercent = 45; // Diameter percentage
const BG = { uri: "https://imgur.com/TakQGCF.png" }; // Background image
function Results(props) {
	return (
		//Safe area view for Iphone's, contains all the information
		<ImageBackground source={BG} style={styles.image}>
		<View style={{zIndex: 999}}>
				<View style={styles.backButton}>
					<Arrow thickness={6} size={10} width={40} height={25} left={27} top={10} color="#418DFF"></Arrow>
				</View>
			</View>
			<View style={styles.barBackground}>
				<View style={styles.barFill} width={125 + 2.29 * aPercent}></View>
				<View style={styles.barImage}>
					<Text style={styles.text}>A</Text>
				</View>
				<Text style={styles.textPercentageReadouts}>Asymetry {aPercent}%</Text>
			</View>
			<View style={styles.barBackground}>
				<View style={styles.barFill} width={125 + 2.29 * bPercent}></View>
				<View style={styles.barImage}>
					<Text style={styles.text}>B</Text>
				</View>
				<Text style={styles.textPercentageReadouts}>Border {bPercent}%</Text>
			</View>
			<View style={styles.barBackground}>
				<View style={styles.barFill} width={125 + 2.29 * cPercent}></View>
				<View style={styles.barImage}>
					<Text style={styles.text}>C</Text>
				</View>
				<Text style={styles.textPercentageReadouts}>Color {cPercent}%</Text>
			</View>
			<View style={styles.barBackground}>
				<View style={styles.barFill} width={125 + 2.29 * dPercent}></View>
				<View style={styles.barImage}>
					<Text style={styles.text}>D</Text>
				</View>
				<Text style={styles.textPercentageReadouts}>Diameter {dPercent}%</Text>
			</View>
		</ImageBackground>
	);
}
const win = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: 42,
		fontWeight: "bold",
		textAlign: "center",
		justifyContent: "center",
	},
	textPercentageReadouts: {
		color: "#0047B1",
		fontSize: 15,
		textAlignVertical: "center",
		padding: 10,
	},
	title: {
		color: "white",
		fontSize: 24,
		padding: 20,
	},
	imageD: {
		aspectRatio: 1,
		resizeMode: "contain",
	},
	backButton: {
		backgroundColor: "white",
		borderColor: "white",
		height: 60,
		width: 125,
		borderWidth: 1,
		borderRadius: 200,
		bottom: 10,
		left: 20,
		position: 'absolute'
	},
	barBackground: {
		backgroundColor: "#EDEDED",
		marginRight: 30,
		marginLeft: 30,
		marginTop: 20,
		height: 125,
		borderRadius: 200,
		flexDirection: "row",
		alignItems: "center",
	},
	barImage: {
		backgroundColor: "#418DFF",
		position: "absolute",
		top: 0,
		left: 0,
		width: 125,
		height: 125,
		borderRadius: 200,
		alignItems: "center",
		justifyContent: "center",
	},
	barFill: {
		backgroundColor: "white",
		borderColor: "#418DFF",
		height: 125,
		borderWidth: 5,
		borderRadius: 200,
	},
});

// Code for back button arrow
const Arrow = ({thickness, color, size, width, height, left, top}) => {
  const arrowWidth = thickness;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "transparent",
      overflow: "visible",
	  left: left,
	  top: top,
      width: width * 1.9,
      height: height * 1.6
    },
    arrowTail: {
      backgroundColor: color,
      width: width * 1.3,
      height: arrowWidth,
      left: width * 0.1,
	  borderTopColor: "transparent",
      borderStyle: "solid",
      position: "absolute",
	  top: height * 0.65,
    },
    arrowHead2: {
      backgroundColor: color,
      width: height * 0.9,
      height: arrowWidth,
      borderTopColor: "transparent",
      borderStyle: "solid",
      transform: [{ rotate: "45deg" }],
      position: "absolute",
      top: height * 0.9
    },
    arrowHead1: {
      backgroundColor: color,
      width: height * 0.9,
      height: arrowWidth,
      borderTopColor: "transparent",
      borderStyle: "solid",
      transform: [{ rotate: "135deg" }],
      position: "absolute",
      top: height * 0.4
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.arrowHead1} />
      <View style={styles.arrowHead2} />
      <View style={styles.arrowTail} />
    </View>
  );
};

export default Results;
