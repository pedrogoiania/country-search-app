import { useState } from 'react';
import restCountries from '../../datasources/restCountries';

const useHomeIteractor = () => {
  const [countries, setCountries] = useState([]);

  const findCountries = async (text) => {
    if (text === '') {
      setCountries([]);
      return;
    }

    try {
      const result = await restCountries.getCountryByPartialName(text);
      setCountries(result);
    } catch (err) {
      setCountries([]);
    }
  };

  return { countries, findCountries };
};

export default useHomeIteractor;
