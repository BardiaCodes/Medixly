import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Button
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1, top: 1}}
        source={require('../assets/homescreenbg.png')}>
       <TouchableOpacity style={styles.btn}>
        <Image source={require('../assets/menuicon.png')}  style={{marginLeft: 20, marginTop: 13}}/>
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <View style={styles.welcomeDiv}>
            <Text style={styles.welcome}>
              👋Hello,
            </Text>
            <Text style={styles.name}>
              John Doe
            </Text>
            <Text style = {styles.stats}>
              Statistics 
            </Text>
            <Text style = {styles.num}>
              90 
              <Text style = {styles.test}> Tests Done </Text> 
            </Text>
            <Image style={{ height: 100, width: 100 }} source={require('../assets/shot.png')}  />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
    
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignSelf: "center",
    color: 'black',
    height: 200,
    width: 300
  },
  name: {
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 0,
    color: 'Black',
    fontWeight: 'bold',    
    textAlign: 'left',    
  },
  shadow: {
  shadowColor: '#202020',
  shadowOffset: {width: 0, height: 0},
  shadowRadius: 5,
 },
 welcomeDiv: {
   marginTop: 15,
 },
  welcome: {
    marginTop: 0,
    marginLeft: 15,
    fontSize: 25,
    color: 'Black',
    fontWeight: 'bold',    
    textAlign: 'left',    
  },
  stats: {
    marginTop: 30,
    fontSize: 40,
    color: 'Black',
    fontStyle: "Montserrat",
    alignSelf: "left",

  },
  num: {
    marginTop: 10, 
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold", 
  },
  test: {
    fontWeight: "normal", 
  }
});

