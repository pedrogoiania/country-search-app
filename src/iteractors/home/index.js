import { useState } from 'react';
import restCountries from '../../datasources/restCountries';

const useHomeIteractor = () => {
  const [countries, setCountries] = useState([]);

  const [recentSearchs, setRecentSearchs] = useState([]);

  const addToRecentSearch = (text) => {
    const currentRecentSearchs = [...recentSearchs];

    currentRecentSearchs.unshift(text);

    if (currentRecentSearchs.length > 10) {
      currentRecentSearchs.splice(10);
    }

    setRecentSearchs(currentRecentSearchs);
  };

  const findCountries = async (text) => {
    if (!text) {
      setCountries([]);
      return;
    }

    addToRecentSearch(text);

    try {
      const result = await restCountries.getCountryByPartialName(text);
      setCountries(result);
    } catch (err) {
      setCountries([]);
    }
  };

  return { countries, recentSearchs, findCountries };
};

export default useHomeIteractor;
