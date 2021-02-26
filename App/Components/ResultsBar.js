import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ResultBar = ({
	category,
	imageWidth,
	imageHeight,
	percentage,
	lengthOfBar,
}) => {
	lengthOfBar = typeof lengthOfBar !== "undefined" ? b : 229; //default length if no length is specficied
	const barRatio = lengthOfBar / 100;
	const categoryFirstLetterLableOverImage = category.charAt(0);
	const styles = StyleSheet.create({
		barBackground: {
			backgroundColor: "#EDEDED",
			marginRight: 30,
			marginLeft: 30,
			marginTop: 20,
			height: imageHeight,
			borderRadius: 200,
			flexDirection: "row",
			alignItems: "center",
		},
		barImage: {
			backgroundColor: "#418DFF",
			position: "absolute",
			top: 0,
			left: 0,
			width: imageWidth,
			height: imageHeight,
			borderRadius: 200,
			alignItems: "center",
			justifyContent: "center",
		},
		barFill: {
			backgroundColor: "white",
			borderColor: "#418DFF",
			height: imageHeight,
			borderWidth: 5,
			borderRadius: 200,
		},
		text: {
			color: "white",
			fontSize: 42,
			fontWeight: "bold",
			textAlign: "center",
			justifyContent: "center",
		},
		textPercentageReadouts: {
			color: "black",
			fontSize: 15,
			textAlignVertical: "center",
			padding: 10,
		},
	});

	return (
		<View style={styles.barBackground}>
			<View
				style={styles.barFill}
				width={imageWidth + barRatio * percentage}
			></View>
			<View style={styles.barImage}>
				<Text style={styles.text}>{categoryFirstLetterLableOverImage}</Text>
			</View>
			<Text style={styles.textPercentageReadouts}>
				{category} {percentage}%
			</Text>
		</View>
	);
};

export default ResultBar;
