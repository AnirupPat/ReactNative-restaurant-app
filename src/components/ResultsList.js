import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetails from './ResultDetails';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={( {item} ) => {
                    return (
                        <ResultDetails result={item}></ResultDetails>
                    )
                }}
            />    
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default ResultsList;