import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { exp } from 'react-native-reanimated';

const ResultDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 200,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold",
        fontSize: 15
    }
});

export default ResultDetails;