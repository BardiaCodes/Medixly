import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
// Get the image through url (imgur)
const image = { uri : "https://i.imgur.com/NLwCJeA.png"};
const deteectimage = {uri: "https://i.imgur.com/PhHulFx.png"}; 
function Detect(props) {
    return (
        //Safe area view for Iphone's, contains all the information

        <View style = {styles.container}> 
            <ImageBackground source = {image} style = {styles.image}>
                <TouchableOpacity onPress={() => alert("Button pressed")}>
                    <ImageBackground source={deteectimage} style= {styles.imageD}>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },
    title: {
        color: "white",
        fontSize: 24,
        padding: 20,
    },
    imageD: {

        aspectRatio: 1, 
        resizeMode: 'contain'
    },
});
export default Detect;