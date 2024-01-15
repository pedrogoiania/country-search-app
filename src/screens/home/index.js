import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ImageBackground, TextInput, View } from 'react-native';

import BottomSheet, { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import colors from '../../components/colors';
import Text from '../../components/Text';
import BaseView from '../../components/BaseView';
import Search from './components/search';

const background = require('../../assets/home-background.png');

function Home() {
  const bottomSheetRef = useRef(null);

  const [snapPoints, setSnapPoints] = useState([60]);

  // variables

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BaseView style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text.Bold>App</Text.Bold>

      <Search />
    </BaseView>
  );
}

export default Home;
