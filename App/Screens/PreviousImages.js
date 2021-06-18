import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView, Image} from 'react-native'

const styles = StyleSheet.create({

});

const Item = ({ uri, timestamp }) => (
    <View style={styles.item}>
        <Text>{timestamp}</Text>
        <Image source={{uri: uri}}/>
    </View>
  );

export default function PreviousImages() {
    let [data, setData] = useState([]);
 
    const getImages = async () => {
        const arrayString = await AsyncStorage.getItem('images');
    
        let array = JSON.parse(arrayString);
    
        if (array === null) {
            array = [];
        } 
    
        setData(array);
    };

    useEffect(() => {
        getImages();
    }, []);
    
    const renderItem = ({ item }) => (
        <Item uri={item.uri} timestamp={item.timestamp}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <FlatList data={data} renderItem={renderItem}/>
            </ScrollView>
        </SafeAreaView>
    );
}