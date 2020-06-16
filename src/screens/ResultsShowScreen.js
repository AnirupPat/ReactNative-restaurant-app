import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import ResultDetails from '../components/ResultDetails';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(result);
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }


    return (
        <View>
            <Text>Result Name: {result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={ ({item}) => { 
                    return <Image style={styles.image} source={{ uri: item }} />
                    
                 } }
            />    
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;