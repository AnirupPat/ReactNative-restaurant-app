import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
    console.log('Hi there !')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
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

  return [searchApi, results , errorMessage];
};