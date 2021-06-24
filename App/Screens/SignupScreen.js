import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default function App() {
	//States
	const [email, setEmail] = useState("example@gmail.com");
	const [password, setPassword] = useState("9+ Characters");
	const [name, setName] = useState("eg. John Doe");

	return (
		//Background and Heading
		<View style={styles.container}>
			<View style={styles.heading}>
				<Image
					source={require("../../assets/medixlylogo.png")}
					style={styles.logo}
				/>
				<Text style={styles.SignUpHeader}>Sign Up</Text>
			</View>
			{/* Name Input Field */}
			<View>
				<Text style={styles.labeltext}>Name</Text>
				<TextInput
					style={styles.input}
					placeholder="e.g. John Doe"
					onChangeText={(val) => setName(val)}
				/>
			</View>
			{/* Email Input Field */}
			<View>
				<Text style={styles.labeltext}>Email</Text>
				<TextInput
					style={styles.input}
					placeholder="example@gmail.com"
					onChangeText={(val) => setEmail(val)}
				/>
			</View>
			{/* Password Input Field */}
			<View>
				<Text style={styles.labeltext}>Password</Text>
				<TextInput
					style={styles.input}
					placeholder="9+ Characters"
					onChangeText={(val) => setPassword(val)}
				/>
			</View>

			<View style={styles.space}></View>
			{/* Sign Up Button */}
			<TouchableOpacity onPress={() => console.log({ email })}>
				<View style={styles.SignUpButton}>
					<Text style={styles.SignUpText}>Sign Up</Text>
				</View>
			</TouchableOpacity>

			<View style={styles.space2}></View>
			{/* Sign In Button */}
			<View style={styles.placeholder}>
				<Text style={styles.smalltext}>Already have an account?</Text>
				<TouchableOpacity>
					<View style={styles.SignInButton}>
						<Text style={styles.SignInText}>Sign In</Text>
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
	placeholder: {
		bottom: 20,
		backgroundColor: "#fff",
		alignSelf: "flex-end",
		flexDirection: "row",
	},
	heading: {
		flex: 0.5,
		alignItems: "center",
		justifyContent: "space-around",
		alignSelf: "flex-start",
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
	SignUpButton: {
		backgroundColor: "#418dff",
		width: 350,
		height: 95,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
		bottom: 15,
	},
	SignInButton: {
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
	SignUpHeader: {
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
	labeltext: {
		fontSize: 20,
		color: "#000000",
		// fontStyle: "Questrial",
		left: 10,
	},
	smalltext: {
		fontSize: 15,
		color: "#7c7c7c",
		// fontStyle: "Questrial",
		alignSelf: "flex-start",
		bottom: 25,
		left: 35,
	},
	SignUpText: {
		fontSize: 30,
		color: "#fff",
		// fontStyle: "Montseratt",
		fontWeight: "500",
	},
	SignInText: {
		fontSize: 20,
		color: "#000",
		// fontStyle: "Montserrat",
		fontWeight: "500",
	},
	space2: {
		height: 20,
	},
	logo: {
		left: 150,
		top: 60,
		resizeMode: "contain",
	},
});

// export default SignUpScreen;
