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
import Arrow from "./App/Components/BackButton";
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
			<Arrow
				thickness={6}
				size={10}
				width={40}
				height={25}
				left={27}
				top={10}
				color="#418DFF"
			></Arrow>
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

export default Results;
