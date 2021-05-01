import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const PastResultsBar = () => {
	return (
		<View>
			<TouchableOpacity onPress={() => alert("420")}>
				<Image
					source={require("../../assets/pastResultsBar.png")}
					style={styles.PRbar}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	PRbar: {
		width: 390,
		height: 160,
		margin: 15,
	},
});

export default PastResultsBar;

// image is self depricating it needs a style
