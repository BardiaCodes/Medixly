import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, Button, Alert } from "react-native";

const ButtonWithBackground = props => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
<Text style={styles.text}>{props.text}</Text>

</View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}
const styles = StyleSheet.create({
button:{
    padding: 16,
    width: 200,
    borderRadius: 24,
    alignItems: "center",
    position: 'absolute',
    bottom:-300,
    left:85,

},
text: {
    color: "black",
    fontSize: 20,    
}

});
export default ButtonWithBackground;
