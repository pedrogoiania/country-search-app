import React, { useEffect, useState } from 'react';

import Text from '../../components/Text';
import BaseView from '../../components/BaseView';
import Search from './components/search';
import useHomeIteractor from '../../iteractors/home';
import useIsTyping from '../../utils/hooks/typing';
import { FlatList } from 'react-native-gesture-handler';
import { Pressable, View } from 'react-native';

function Home() {
  const { countries, recentSearchs, findCountries } = useHomeIteractor();

  const [searchTextValue, setSearchTextValue] = useState('');

  const callApi = (value) => {
    findCountries(value);
  };

  const { setPartialString } = useIsTyping(callApi);

  useEffect(() => {
    setPartialString(searchTextValue);
  }, [searchTextValue]);

  const onChangeText = (text) => {
    setSearchTextValue(text);
  };

  return (
    <BaseView>
      <Text.Bold style={{ fontSize: 32 }}>Country Seach App</Text.Bold>

      {recentSearchs.length ? (
        <FlatList
          data={recentSearchs}
          ListHeaderComponent={
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 24 }}>Recent Searchs</Text>
            </View>
          }
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setSearchTextValue(item);
              }}
            >
              <Text>{item}</Text>
            </Pressable>
          )}
        />
      ) : null}

      <Search onChangeText={onChangeText} results={countries} searchTextValue={searchTextValue} />
    </BaseView>
  );
}

export default Home;
