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
import ResultBar from "./App/Components/ResultsBar";
const BG = { uri: "https://imgur.com/TakQGCF.png" }; // Background image
function Results(props) {
	return (
		<View style={styles.container}>
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
				<ResultBar
					category={"Asymetry"}
					imageWidth={125}
					imageHeight={125}
					percentage={50}
				></ResultBar>
				<ResultBar
					category={"Border"}
					imageWidth={125}
					imageHeight={125}
					percentage={50}
				></ResultBar>
				<ResultBar
					category={"Color"}
					imageWidth={125}
					imageHeight={125}
					percentage={50}
				></ResultBar>
				<ResultBar
					category={"Diameter"}
					imageWidth={125}
					imageHeight={125}
					percentage={50}
				></ResultBar>
			</ImageBackground>
		</View>
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
