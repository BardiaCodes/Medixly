import React, {Component} from 'react';
import { StyleSheet, View } from "react-native";

// Code for back button arrow
const Arrow = ({ thickness, color, size, width, height, left, top }) => {
	const arrowWidth = thickness;
	const styles = StyleSheet.create({
		container: {
			backgroundColor: "transparent",
			overflow: "visible",
			left: left,
			top: top,
			width: width * 1.9,
			height: height * 1.6,
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
			top: height * 0.9,
		},
		arrowHead1: {
			backgroundColor: color,
			width: height * 0.9,
			height: arrowWidth,
			borderTopColor: "transparent",
			borderStyle: "solid",
			transform: [{ rotate: "135deg" }],
			position: "absolute",
			top: height * 0.4,
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
			position: "absolute",
		},
	});

	return (
		<View style={{ zIndex: 999 }}>
			<View style={styles.backButton}>
				<View style={styles.container}>
					<View style={styles.arrowHead1} />
					<View style={styles.arrowHead2} />
					<View style={styles.arrowTail} />
				</View>
			</View>
		</View>
	);
};

export default Arrow;
