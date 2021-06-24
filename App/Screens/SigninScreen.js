import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default function App() {
	//States
	const [email, setEmail] = useState("example@gmail.com");
	const [password, setPassword] = useState("9+ Characters");

	return (
		<View style={styles.container}>
			<View style={styles.heading}>
				<Image
					source={require("../assets/medixlylogo.png")}
					style={styles.logo}
				/>
				<Text style={styles.LogInHeader}>Log In</Text>
			</View>
			{/* Email Input Field */}
			<View>
				<View style={styles.InputFields}>
					<Text style={styles.labeltext}>Email</Text>
					<TextInput
						style={styles.input}
						placeholder="example@gmail.com"
						onChangeText={(val) => setEmail(val)}
					/>
				</View>
				{/* Password Input Field */}
				<View style={styles.InputFields}>
					<Text style={styles.labeltext}>Password</Text>
					<TextInput
						style={styles.input}
						placeholder="9+ Characters"
						onChangeText={(val) => setPassword(val)}
					/>
				</View>
			</View>
			<View style={styles.space}></View>

			{/* Sign Up Button */}
			<TouchableOpacity
				style={styles.opacity}
				onPress={() => console.log({ email })}
			>
				<View style={styles.LogInButton}>
					<Text style={styles.LogInText}>Log In</Text>
				</View>
			</TouchableOpacity>

			{/* Sign In Button */}
			<View style={styles.placeholder}>
				<Text style={styles.smalltext}>Don't have an account yet?</Text>
				<TouchableOpacity>
					<View style={styles.SignUpButton}>
						<Text style={styles.SignUpText}>Sign Up</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "space-between",
	},
	LogInHeader: {
		bottom: 20,
		left: 30,
		fontSize: 70,
		fontWeight: "bold",
		color: "#418dff",
		textShadowColor: "#808080",
		textShadowOffset: { width: 1, height: 4 },
		textShadowRadius: 3,

		// fontStyle: "Montseratt",
	},
	input: {
		backgroundColor: "#dcdcdc",
		borderColor: "#777",
		padding: 20,
		fontSize: 20,
		width: 350,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 25,
	},
	logo: {
		left: 160,
		top: 100,
		resizeMode: "contain",
	},
	labeltext: {
		fontSize: 20,
		color: "#000000",
		// fontStyle: "Questrial",
		left: 10,
	},
	heading: {
		flex: 0.5,
		alignItems: "center",
		justifyContent: "space-around",
		alignSelf: "flex-start",
	},
	LogInButton: {
		backgroundColor: "#418dff",
		width: 350,
		height: 95,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
		bottom: 15,
	},
	SignUpButton: {
		alignSelf: "flex-end",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#c4c4c4",
		width: 230,
		height: 50,
		borderColor: "#e1e1e1",
		borderWidth: 3,
		right: 20,
	},
	LogInText: {
		fontSize: 30,
		color: "#fff",
		// fontStyle: "Montseratt",
		fontWeight: "500",
	},
	SignUpText: {
		fontSize: 20,
		color: "#000",
		// fontStyle: "Montserrat",
		fontWeight: "500",
	},
	placeholder: {
		bottom: 50,
		backgroundColor: "#fff",
		alignSelf: "flex-end",
		flexDirection: "row",
	},
	smalltext: {
		fontSize: 15,
		color: "#7c7c7c",
		// fontStyle: "Questrial",
		alignSelf: "flex-start",
		bottom: 25,
		left: 35,
	},
	opacity: {
		bottom: 50,
	},
	InputFields: {
		padding: 10,
	},
});

// export default SignInScreen;
