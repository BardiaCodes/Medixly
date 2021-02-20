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
const button_A = { uri: "https://imgur.com/4SWLLTu.png" }; // A button
const button_B = { uri: "https://imgur.com/9CBt642.png" }; // B button
const button_C = { uri: "https://imgur.com/bqdan6D.png" }; // C button
const button_D = { uri: "https://imgur.com/IvDi5QA.png" }; // D button
const button_BACK = { uri: "https://imgur.com/2zC4NGP.png" }; // Back button
const bar_FILL = { uri: "https://imgur.com/Y7IFm2h.png" }; // Texture for filled part of bar
const bar_BG = { uri: "https://imgur.com/3byPAgm.png" }; // Texture for background part of bar (unfilled bar)
const BG = { uri: "https://imgur.com/TakQGCF.png" }; // Background image
const barPercentage = 0;
const barProption = 2.29 * barPercentage;
function Results(props) {
	return (
		//Safe area view for Iphone's, contains all the information
		<ImageBackground source={BG} style={styles.image}>
			<View style={styles.barBackground}>
				<View style={styles.barFill}></View>
				<View style={styles.barImage}>
					<Text style={styles.text}>A</Text>
				</View>
			</View>
			<View style={styles.barBackground}>
				<View style={styles.barFill}></View>
				<View style={styles.barImage}>
					<Text style={styles.text}>B</Text>
				</View>
			</View>
			<View style={styles.barBackground}>
				<View style={styles.barFill}></View>
				<View style={styles.barImage}>
					<Text style={styles.text}>C</Text>
				</View>
			</View>
			<View style={styles.barBackground}>
				<View style={styles.barFill}></View>
				<View style={styles.barImage}>
					<Text style={styles.text}>D</Text>
				</View>
			</View>
		</ImageBackground>
	);
}
/*
class BarClass extends React.Component {
	constructor(props) {
		super(this.barCategory);
		this.barCategory = barCategory;
		//this.categoryPercentage = categoryPercentage;
	}
	render() {
		return (
			<View style={styles.barBackground}>
				<Image style={styles.barImage} source={this.props.barCategory}></Image>
			</View>
		);
	}
}*/
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
		width: 125 + barProption,
		borderWidth: 5,
		borderRadius: 200,
	},
});
export default Results;
