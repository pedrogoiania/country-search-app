import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Home from './screens/home';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Home />
    </GestureHandlerRootView>
  );
}

export default App;
