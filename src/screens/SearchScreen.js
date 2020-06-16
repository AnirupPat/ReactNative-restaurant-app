import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results , errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    })
  };

  return (
    // View style={{ flex: 1 }}
     <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null} 
      <ScrollView>
        <ResultsList 
            results={filterResultByPrice('$')} 
            title="Cost Effective">
        </ResultsList>
        <ResultsList 
            results={filterResultByPrice('$$')} 
            title="Bit Pricier">
        </ResultsList>
        <ResultsList
            results={filterResultByPrice('$$')} 
            title="Big Spender">
        </ResultsList>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
