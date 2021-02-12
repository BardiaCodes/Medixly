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
const button_A = { uri: "https://imgur.com/4SWLLTu" }; // A button
const button_B = { uri: "https://imgur.com/9CBt642" }; // B button
const button_C = { uri: "https://imgur.com/bqdan6D" }; // C button
const button_D = { uri: "https://imgur.com/IvDi5QA" }; // D button
const button_BACK = { uri: "https://imgur.com/2zC4NGP" }; // Back button
const bar_FILL = { uri: "https://imgur.com/Y7IFm2h" }; // Texture for filled part of bar
const bar_BG = { uri: "https://imgur.com/3byPAgm" }; // Texture for background part of bar (unfilled bar)
const BG = { uri: "https://imgur.com/TakQGCF" }; // Background image
function Results(props) {
	return (
		//Safe area view for Iphone's, contains all the information

		<View style={styles.container}>
			<ImageBackground source={BG} style={styles.image}></ImageBackground>
			<Text>Fortnite</Text>
		</View>
	);
}

class barClass {
	constructor(barCategory, categoryPercentage) {
		this.barCategory = barCategory;
		this.categoryPercentage = categoryPercentage;
	}
	render() {
		return (
			<View>
				<ImageBackground source={bar_BG}></ImageBackground>
				<Image source={this.barCategory}></Image>
			</View>
		);
	}
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
		backgroundColor: "#000000a0",
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
});
export default Results;
