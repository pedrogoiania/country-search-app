import React from 'react';
import { ImageBackground, View, SafeAreaView } from 'react-native';

import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const background = require('../../assets/home-background.png');

function BaseView(props) {
  const { children } = props;

  return (
    <ImageBackground source={background} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <View {...props} style={{ padding: 20, flex: 1, ...props.style }}>
          {children}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default BaseView;
