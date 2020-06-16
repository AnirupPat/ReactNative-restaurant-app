import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results , errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null} 
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Cost Effective"></ResultsList>
      <ResultsList title="Bit Pricier"></ResultsList>
      <ResultsList title="Big Spender"></ResultsList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
