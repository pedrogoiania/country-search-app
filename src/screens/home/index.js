import React, { useEffect, useState } from 'react';

import Text from '../../components/Text';
import BaseView from '../../components/BaseView';
import Search from './components/search';
import useHomeIteractor from '../../iteractors/home';
import useIsTyping from '../../utils/hooks/typing';
import { FlatList } from 'react-native-gesture-handler';
import { Pressable, View } from 'react-native';
import strings from '../../utils/strings';
import Separator from '../../components/Separator';

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
      <Text.Bold style={{ fontSize: 32 }}>{strings.home.title}</Text.Bold>

      {recentSearchs.length ? (
        <FlatList
          data={recentSearchs}
          ListHeaderComponent={
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 24 }}>{strings.home.recentTitle}</Text>
            </View>
          }
          ItemSeparatorComponent={<Separator />}
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
