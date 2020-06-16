import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    console.log('Hi there !')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 30,
          term: searchTerm,
          location: 'San Jose'
        }
      });
      setResults(response.data.businesses);
    } catch(e) {
      console.log(e);
      setErrorMessage('Something went wrong !')
    }
  };

  // call searchApi when component is first rendered
  // this is bad code
  useEffect(() => {
    searchApi('Pasta');
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null} 
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
