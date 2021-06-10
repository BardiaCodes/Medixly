import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create({

});

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function PreviousImages() {
    let [data, setData] = useState([]);
    
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} renderItem={renderItem}/>
        </SafeAreaView>
    );
}