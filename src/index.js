import React from 'react';
import { View } from 'react-native';

import colors from './components/colors';
import Text from './components/Text';

function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary.blue,
      }}
    >
      <Text.Bold>App</Text.Bold>
    </View>
  );
}

export default App;
