import React, { useEffect, useState } from 'react';

import Text from '../../components/Text';
import BaseView from '../../components/BaseView';
import Search from './components/search';
import useHomeIteractor from '../../iteractors/home';
import useIsTyping from '../../utils/hooks/typing';

function Home() {
  const { countries, findCountries } = useHomeIteractor();

  const callApi = (value) => {
    findCountries(value);
  };

  const { setPartialString } = useIsTyping(callApi);

  const onChangeText = (text) => {
    console.log(text);
    setPartialString(text);
  };

  return (
    <BaseView style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text.Bold>App</Text.Bold>

      <Search onChangeText={onChangeText} results={countries} />
    </BaseView>
  );
}

export default Home;
