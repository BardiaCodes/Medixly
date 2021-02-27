  
import React, { useState, useEffect } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import {Camera} from 'expo-camera';
// Get the image through url (imgur)
const button_BACK = { uri: "https://imgur.com/2zC4NGP.png"};
const image = { uri : "https://i.imgur.com/NLwCJeA.png"};
const deteectimage = {uri: "https://i.imgur.com/ntJM5VX.png"}; 
const pastResultsButton = {uri: "https://i.imgur.com/fu1KbuH.png"};
var snap; 

function Detect(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
    if (hasPermission === null) {
      <View/>
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
        //Safe area view for Iphone's, contains all the information
        <View style = {styles.container}> 
            <ImageBackground source = {image} style = {styles.image}>
                <View style = {styles.backView}>
                    <TouchableOpacity onPress={ () => alert("back button activated") } style={styles.TOstyle}>
                        <Image source = { button_BACK } style = {styles.backButton} />    
                    </TouchableOpacity>
                </View>
                <View style = {styles.detectView}> 
                    <TouchableOpacity style = {styles.button} onPress = {() => {
                       <Camera style = {styles.camera} type = {type}> //Doesn't pop up for some reason
                       </Camera>
                      }}>
                      <Image source={deteectimage} style= {styles.imageD}>
                      </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button2} onPress={() => alert("Button pressed")}>
                        <ImageBackground source={pastResultsButton} style= {styles.imageP}>
                        </ImageBackground>
                    </TouchableOpacity>
                    
                </View>
            </ImageBackground>
        </View>
    );
}
const win = Dimensions.get('window');
const height = win.height;
const width = win.width;
const styles = StyleSheet.create({
    backView : {
        flex: 1,
        marginHorizontal: 1,
        marginVertical: 30,
        
    },
    detectView: {
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "contain"
    },
    backButton: {
        width: 110,
        height: 65,
        position: "absolute"
    },
    TOstyle: {
        marginHorizontal: 20
    },
    button: {
        marginVertical: 70,
        padding: 50
    },
    button2: {
        
        justifyContent: "center",
        marginHorizontal: 18,
        marginVertical: 30
    },
    imageD: {
        aspectRatio: 1

    },
    imageP: {
        aspectRatio: 1,
        width: 390,
        height: 160,
    },
    camera: {
      flex: 1
    }
    
});
function camera(type) {

}
export default Detect;
