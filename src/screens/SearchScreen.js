import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 30,
          term: term,
          location: 'San Jose'
        }
      });
      setResults(response.data.businesses);
    } catch(e) {
      console.log(e);
      setErrorMessage('Something went wrong !')
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null} 
      <Text>We have found {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
